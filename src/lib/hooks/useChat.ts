import { useState, useCallback, useRef, useEffect } from 'react';
import { ConversationMessage, UserContext, ChatResponse } from '@/lib/types/chat';
import { OpenRouter } from "@openrouter/sdk";

interface UseChatOptions {
  userContext: UserContext;
  onError?: (error: string) => void;
  onLimitReached?: (remainingMessages: number) => void;
}

interface UseChatReturn {
  messages: ConversationMessage[];
  isLoading: boolean;
  error: string | null;
  remainingMessages: number;
  sendMessage: (message: string) => Promise<void>;
  resetChat: () => void;
}

// Helper functions for localStorage
const getStoredMessageCount = (): number => {
  if (typeof window === 'undefined') return 0;
  const stored = localStorage.getItem('laralabs_message_count');
  return stored ? parseInt(stored, 10) : 0;
};

const saveMessageCount = (count: number) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('laralabs_message_count', count.toString());
  }
};

const getStoredMessages = (): ConversationMessage[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('laralabs_chat_history');
  try {
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Failed to parse chat history', e);
    return [];
  }
};

const saveMessages = (messages: ConversationMessage[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('laralabs_chat_history', JSON.stringify(messages));
  }
};

/**
 * Custom hook for managing chat interactions with streaming support
 */
export function useChat({ userContext, onError, onLimitReached }: UseChatOptions): UseChatReturn {
  const [messages, setMessages] = useState<ConversationMessage[]>(() => getStoredMessages());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Initialize from localStorage
  const [messageCount, setMessageCount] = useState(() => getStoredMessageCount());
  const [remainingMessages, setRemainingMessages] = useState(() => Math.max(0, 5 - getStoredMessageCount()));
  const abortControllerRef = useRef<AbortController | null>(null);

  // Sync remainingMessages with messageCount and save to localStorage
  useEffect(() => {
    const remaining = Math.max(0, 5 - messageCount);
    setRemainingMessages(remaining);
    saveMessageCount(messageCount);
  }, [messageCount]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim() || isLoading) return;

    // Check if limit already reached in localStorage
    const currentCount = getStoredMessageCount();
    if (currentCount >= 5) {
      onLimitReached?.(0);
      setRemainingMessages(0);
      return;
    }

    setIsLoading(true);
    setError(null);

    // Add user message immediately
    const userMessage: ConversationMessage = {
      role: 'user',
      content: message.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);

    // Create abort controller for this request
    abortControllerRef.current = new AbortController();

    try {
      const openrouter = new OpenRouter({
        apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || ''
      });

      // System prompt (paid models support system role properly)
      const systemPrompt = `You are a website assistant for an AI automation agency.
Your goals:
1. Answer clearly in simple English, daily use english
2. the response should feel that user got some value from it, it might be knowledge or service or italic font quote releated to business or ai.
3. response should be customised based on the given inputs, Try to ellobrate the problem and propose a short solution for them
4. Keep replies short and professional 180 to 200 tokens
5. Every response maintain CTA {link : https://laralabs.in/contact}
6. everytime respond in the most structured format like tables or bullets
7. talk in numbers and results use %, no of hours, costs save make sure these should be achivible (mention less)

### User Context (The Lead)
- **Name**: ${userContext?.userName || 'Guest'}
- **Industry**: ${userContext?.businessType || 'Unknown'}
- **Team Size**: ${userContext?.teamSize || 'Unknown'}
- **Key Challenge**: ${userContext?.keyProblem || 'Not specified'}

At Hight level laralabs offer these services
Business Automation & AI Agents, Scalable Software Solutions, Marketing Operations, AI Creatives & Content Systems.
If we go deeper we do chatbots, integration, RAG Systems, software devlopement...etc`;

      // Prepare messages for API (System + History + Current)
      const historyContext = messages.slice(-6).map(m => ({ 
        role: m.role === 'ai' ? 'assistant' : 'user', 
        content: m.content 
      }));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const apiMessages: any[] = [
        { role: 'system', content: systemPrompt },
        ...historyContext,
        { role: 'user', content: message.trim() }
      ];

      // Add empty AI message that will be updated with streaming content
      setMessages(prev => [...prev, { role: 'ai', content: '', timestamp: Date.now() }]);
      
      const stream = await openrouter.chat.send({
        model: "deepseek/deepseek-v4-flash",
        messages: apiMessages,
        stream: true
      });

      let aiMessageContent = '';

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        
        if (content) {
          aiMessageContent += content;
          
          setMessages(prev => {
            const newMessages = [...prev];
            const lastIdx = newMessages.length - 1;
            if (newMessages[lastIdx] && newMessages[lastIdx].role === 'ai') {
              newMessages[lastIdx] = {
                ...newMessages[lastIdx],
                content: aiMessageContent
              };
            }
            return newMessages;
          });
        }
      }

      // Successful completion
      setMessageCount(prev => prev + 1);

    } catch (err) {
      console.error('Chat error:', err);
      // Remove the empty AI message on error
      setMessages(prev => {
        const lastIdx = prev.length - 1;
        if (prev[lastIdx]?.role === 'ai' && !prev[lastIdx].content) {
          return prev.slice(0, -1);
        }
        return prev;
      });
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, [messages, userContext, isLoading, setError, onError, onLimitReached]);

  const resetChat = useCallback(() => {
    // Abort ongoing request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    // Don't clear messages to preserve history
    // setMessages([]); 
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    messages,
    isLoading,
    error,
    remainingMessages,
    sendMessage,
    resetChat
  };
}

import { useState, useCallback, useRef, useEffect } from 'react';
import { ConversationMessage, UserContext, ChatResponse } from '@/lib/types/chat';

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

/**
 * Custom hook for managing chat interactions with streaming support
 */
export function useChat({ userContext, onError, onLimitReached }: UseChatOptions): UseChatReturn {
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
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

    // Prepare AI message placeholder
    let aiMessageContent = '';
    const aiMessageIndex = messages.length + 1;

    try {
      // Get last 2 messages for context (excluding the current one)
      const conversationHistory = messages.slice(-2);

      // Generate a session ID for this chat instance if one doesn't exist
      let sessionId = sessionStorage.getItem('laralabs_session_id');
      if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
        sessionStorage.setItem('laralabs_session_id', sessionId);
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-session-id': sessionId, // Pass session ID in headers
        },
        body: JSON.stringify({
          message: message.trim(),
          conversationHistory,
          userContext
        }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        if (response.status === 429) {
          // Rate limit reached - trigger the popup without logging an error
          onLimitReached?.(0);
          setRemainingMessages(0);
          return;
        }
        throw new Error(`Request failed with status ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Response body is not readable');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      // Add empty AI message that will be updated with streaming content
      setMessages(prev => [...prev, { role: 'ai', content: '', timestamp: Date.now() }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // Process complete lines
        let lineEnd: number;
        while ((lineEnd = buffer.indexOf('\n')) !== -1) {
          const line = buffer.slice(0, lineEnd).trim();
          buffer = buffer.slice(lineEnd + 1);

          if (!line || !line.startsWith('data: ')) continue;

          const data = line.slice(6);
          
          try {
            const parsed: ChatResponse = JSON.parse(data);

            if (parsed.type === 'content' && parsed.content) {
              aiMessageContent += parsed.content;
              
              // Update AI message with accumulated content
              setMessages(prev => {
                const newMessages = [...prev];
                if (newMessages[aiMessageIndex]) {
                  newMessages[aiMessageIndex] = {
                    ...newMessages[aiMessageIndex],
                    content: aiMessageContent
                  };
                }
                return newMessages;
              });
            } else if (parsed.type === 'done') {
              // Increment message count in localStorage
              setMessageCount(prev => prev + 1);
              
              if (parsed.remainingMessages !== undefined) {
                setRemainingMessages(parsed.remainingMessages);
                onLimitReached?.(parsed.remainingMessages);
              }
            } else if (parsed.type === 'error') {
              throw new Error(parsed.error || 'Stream error occurred');
            }
          } catch (e) {
            // Ignore JSON parse errors
            if (e instanceof Error && !e.message.includes('JSON')) {
              throw e;
            }
          }
        }
      }

    } catch (err) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          console.log('Request aborted');
          return;
        }
        const errorMessage = err.message || 'Failed to send message';
        setError(errorMessage);
        onError?.(errorMessage);
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, [messages, userContext, isLoading, onError, onLimitReached]);

  const resetChat = useCallback(() => {
    // Abort ongoing request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    setMessages([]);
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

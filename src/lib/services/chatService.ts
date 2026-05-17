import { ConversationMessage, UserContext } from '@/lib/types/chat';

interface StreamResponseParams {
  message: string;
  conversationHistory: ConversationMessage[];
  userContext: UserContext;
  onChunk: (chunk: string) => void;
  onComplete: (fullResponse: string) => void;
  onError: (error: Error) => void;
}

export class ChatService {
  private static instance: ChatService;
  private readonly apiKey: string;
  private readonly model: string = 'google/gemma-4-26b-a4b-it:free';
  private readonly apiUrl: string = 'https://openrouter.ai/api/v1/chat/completions';

  private constructor() {
    this.apiKey = process.env.OPENROUTER_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('OPENROUTER_API_KEY is not configured');
    }
  }

  public static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  /**
   * Build conversation context with last 2 messages for token efficiency
   */
  private buildMessages(
    message: string,
    conversationHistory: ConversationMessage[],
    systemPrompt: string
  ): Array<{ role: string; content: string }> {
    const messages: Array<{ role: string; content: string }> = [
      { role: 'system', content: systemPrompt }
    ];

    // Only include last 2 messages (1 exchange) to reduce token usage
    const recentHistory = conversationHistory.slice(-2);
    recentHistory.forEach(msg => {
      messages.push({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      });
    });

    // Add current message
    messages.push({ role: 'user', content: message });

    return messages;
  }

  /**
   * Build system prompt with user context
   */
  private buildSystemPrompt(userContext: UserContext): string {
    const basePrompt = this.getBasePrompt();
    
    const contextSection = `
User Context:
- Business Type: ${userContext.businessType}
- Team Size: ${userContext.teamSize}
- Key Problem: ${userContext.keyProblem}
- Primary Goal: ${userContext.primaryGoal}
- Name: ${userContext.userName}
- Email: ${userContext.userEmail}

Use this context to personalize your responses.
`;

    return `${basePrompt}\n\n${contextSection}`;
  }

  /**
   * Get base system prompt from environment or default
   */
  private getBasePrompt(): string {
    // In production, this should be loaded from the prompt.txt file
    return `You are Lara Labs AI, a pre-sales and AI consulting assistant.

Your primary objective:
- Educate the user on WHERE and HOW AI can be applied to their business.
- Quantify outcomes clearly (time saved, cost reduced, efficiency gained).
- Guide the conversation toward scheduling a strategy call.
- Response should be in Markdown, CTA Should be present in every response with link.
- Respond Based on the User Query not everything mentioned in this prompt

How to respond:
1. Personalize every response using
2. Clearly explain
3. Speak in numbers when needed
4. Educate, not sell. The user should feel they learned something valuable even without a call.

Response style:
- layman daily use language with layman terms

Pricing rules:
- Say: "pricing depends on scope and is finalized after a free AI audit"

CTA rule:
- Soft CTA first (education-focused)
- Strong CTA at the end: schedule a free strategy call (link: laralabs.in/comingsoon)

few examples :

Perfect 👍
Below are the **same examples rewritten in very simple, daily-use language**.
No jargon, no tech words, just **clear benefits + numbers**.

---

## Example 1 – SaaS / Software Business

### How AI Can Help Your Business

* AI can handle marketing tasks automatically
  → Save **25–30%** on ad spend
* AI chat can answer customer questions
  → Save **20 hours every week**
* AI can manage internal tasks
  → Team works **25% faster**

**Overall Impact**

* Less cost
* Less manual work
* Better results

📞 Want to see how this fits your business? **Book a free call**

---

## Example 2 – Agency / Service Business

### AI for Your Agency Work

| Work Area  | What AI Does            | Result              |
| ---------- | ----------------------- | ------------------- |
| Content    | Creates posts & designs | Work done 3× faster |
| Sales      | Auto follow-ups         | 20% more deals      |
| Daily work | Automates tasks         | Save 25 hrs/week    |

**What You Gain**

* Less stress
* More time
* Better profit

👉 Let’s explain this clearly in a **free strategy call**


---

## Example 3 – Small Team / Startup

### AI for Small Teams

* AI handles repeat work
* Fewer manual tasks
* Same work with less effort

**Confirm Results**

* Save **15–20 hrs/week**
* Reduce costs by **20–30%**
* Team works faster

📞 Let’s show you exactly how in a **free call**

---

## Example 4 – When User Is Not Clear

### Where AI Can Help You

* Marketing work done faster
* Less daily manual work
* Better tracking and follow-ups

**What Most Businesses See**

* Save **20+ hours every week**
* Work becomes **30% more efficient**



`;
  }

  /**
   * Stream response from OpenRouter API
   */
  public async streamResponse(params: StreamResponseParams): Promise<void> {
    const { message, conversationHistory, userContext, onChunk, onComplete, onError } = params;

    try {
      const systemPrompt = this.buildSystemPrompt(userContext);
      const messages = this.buildMessages(message, conversationHistory, systemPrompt);

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://laralabs.in',
          'X-Title': 'Lara Labs AI Assistant'
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          stream: true,
          max_tokens: 500, // Limit to keep responses concise (100-120 tokens target)
          temperature: 0.7,
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('OpenRouter API Error Response:', errorText);
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(errorData.error?.message || `Provider returned error (${response.status})`);
        } catch (e) {
          throw new Error(`Provider returned error (${response.status}): ${errorText}`);
        }
      }

      if (!response.body) {
        throw new Error('Response body is not available');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let fullResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // Process complete lines from buffer
        let lineEnd: number;
        while ((lineEnd = buffer.indexOf('\n')) !== -1) {
          const line = buffer.slice(0, lineEnd).trim();
          buffer = buffer.slice(lineEnd + 1);

          // Skip comments and empty lines
          if (!line || line.startsWith(':')) continue;

          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;

            try {
              const parsed = JSON.parse(data);
              
              // Handle mid-stream errors
              if (parsed.error) {
                throw new Error(parsed.error.message || 'Stream error occurred');
              }

              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                fullResponse += content;
                onChunk(content);
              }
            } catch (e) {
              // Ignore JSON parse errors for malformed chunks
              if (e instanceof Error && !e.message.includes('Unexpected')) {
                throw e;
              }
            }
          }
        }
      }

      onComplete(fullResponse);

    } catch (error) {
      onError(error instanceof Error ? error : new Error('Unknown error'));
    }
  }
}

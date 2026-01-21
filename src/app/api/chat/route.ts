import { NextRequest, NextResponse } from 'next/server';
import { ChatService } from '@/lib/services/chatService';
import { rateLimiter } from '@/lib/utils/rateLimiter';
import { validateChatRequest } from '@/lib/utils/validation';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    // Get user identifier (Session-based, falling back to IP)
    const sessionId = req.headers.get('x-session-id');
    const userIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Use session ID if available, otherwise IP. 
    // This allows Incognito (new session ID) to start fresh.
    const userId = sessionId || userIp;
    
    // Rate limiting check
    const isAllowed = await rateLimiter.checkLimit(userId);
    if (!isAllowed.allowed) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded',
          message: `You have reached the maximum of ${isAllowed.limit} messages. Please try again later.`,
          retryAfter: isAllowed.resetTime 
        },
        { status: 429 }
      );
    }

    // Parse and validate request
    const body = await req.json();
    const validation = validateChatRequest(body);
    
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Invalid request', details: validation.errors },
        { status: 400 }
      );
    }

    if (!validation.data) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }

    const { message, conversationHistory, userContext } = validation.data;

    // Initialize chat service
    const chatService = ChatService.getInstance();

    // Create readable stream for SSE
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Get streaming response from LLM
          await chatService.streamResponse({
            message,
            conversationHistory,
            userContext,
            onChunk: (chunk: string) => {
              // Send SSE formatted chunk
              const data = `data: ${JSON.stringify({ type: 'content', content: chunk })}\n\n`;
              controller.enqueue(encoder.encode(data));
            },
            onComplete: async (fullResponse: string) => {
              // Increment user message count
              await rateLimiter.incrementCount(userId);
              
              // Send completion signal
              const data = `data: ${JSON.stringify({ type: 'done', messageCount: isAllowed.currentCount + 1, remainingMessages: isAllowed.limit - (isAllowed.currentCount + 1) })}\n\n`;
              controller.enqueue(encoder.encode(data));
              controller.close();
            },
            onError: (error: Error) => {
              // Send error via SSE
              const data = `data: ${JSON.stringify({ type: 'error', error: error.message })}\n\n`;
              controller.enqueue(encoder.encode(data));
              controller.close();
            }
          });
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          const data = `data: ${JSON.stringify({ type: 'error', error: errorMessage })}\n\n`;
          controller.enqueue(encoder.encode(data));
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

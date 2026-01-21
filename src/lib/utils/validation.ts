import { ConversationMessage, UserContext } from '@/lib/types/chat';

interface ValidationResult {
  valid: boolean;
  errors?: string[];
  data?: {
    message: string;
    conversationHistory: ConversationMessage[];
    userContext: UserContext;
  };
}

/**
 * Validate and sanitize chat request
 */
export function validateChatRequest(body: any): ValidationResult {
  const errors: string[] = [];

  // Validate message
  if (!body.message || typeof body.message !== 'string') {
    errors.push('Message is required and must be a string');
  } else if (body.message.trim().length === 0) {
    errors.push('Message cannot be empty');
  } else if (body.message.length > 1000) {
    errors.push('Message exceeds maximum length of 1000 characters');
  }

  // Validate conversation history
  const conversationHistory = Array.isArray(body.conversationHistory) 
    ? body.conversationHistory 
    : [];

  if (conversationHistory.length > 10) {
    errors.push('Conversation history exceeds maximum length');
  }

  // Validate each message in history
  for (const msg of conversationHistory) {
    if (!msg.role || !['user', 'ai'].includes(msg.role)) {
      errors.push('Invalid message role in conversation history');
      break;
    }
    if (!msg.content || typeof msg.content !== 'string') {
      errors.push('Invalid message content in conversation history');
      break;
    }
  }

  // Validate user context
  const userContext = body.userContext || {};
  
  if (!userContext.userName || typeof userContext.userName !== 'string') {
    errors.push('User name is required');
  }

  if (!userContext.userEmail || typeof userContext.userEmail !== 'string') {
    errors.push('User email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userContext.userEmail)) {
    errors.push('Invalid email format');
  }

  if (!userContext.businessType || typeof userContext.businessType !== 'string') {
    errors.push('Business type is required');
  }

  if (!userContext.teamSize || typeof userContext.teamSize !== 'string') {
    errors.push('Team size is required');
  }

  if (!userContext.keyProblem || typeof userContext.keyProblem !== 'string') {
    errors.push('Key problem is required');
  }

  if (!userContext.primaryGoal || typeof userContext.primaryGoal !== 'string') {
    errors.push('Primary goal is required');
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  // Sanitize data
  const sanitizedMessage = sanitizeString(body.message);
  const sanitizedHistory = conversationHistory.map((msg: any) => ({
    role: msg.role,
    content: sanitizeString(msg.content)
  }));

  const sanitizedContext: UserContext = {
    userName: sanitizeString(userContext.userName),
    userEmail: sanitizeString(userContext.userEmail),
    businessType: sanitizeString(userContext.businessType),
    teamSize: userContext.teamSize,
    keyProblem: sanitizeString(userContext.keyProblem),
    primaryGoal: sanitizeString(userContext.primaryGoal)
  };

  return {
    valid: true,
    data: {
      message: sanitizedMessage,
      conversationHistory: sanitizedHistory,
      userContext: sanitizedContext
    }
  };
}

/**
 * Basic string sanitization to prevent injection attacks
 */
function sanitizeString(str: string): string {
  return str
    .trim()
    .replace(/[<>]/g, '') // Remove basic HTML tags
    .slice(0, 1000); // Enforce max length
}

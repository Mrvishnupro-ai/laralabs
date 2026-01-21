export interface ConversationMessage {
  role: 'user' | 'ai';
  content: string;
  timestamp?: number;
}

export interface UserContext {
  userName: string;
  userEmail: string;
  businessType: string;
  teamSize: string;
  keyProblem: string;
  primaryGoal: string;
}

export interface ChatRequest {
  message: string;
  conversationHistory: ConversationMessage[];
  userContext: UserContext;
}

export interface ChatResponse {
  type: 'content' | 'done' | 'error';
  content?: string;
  error?: string;
  messageCount?: number;
  remainingMessages?: number;
}

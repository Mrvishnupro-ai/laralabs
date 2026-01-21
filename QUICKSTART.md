# 🚀 Quick Start Guide - AI Chatbot

## Prerequisites

- OpenRouter API key (get from https://openrouter.ai/)

## Setup (2 minutes)

### 1. Add API Key

Create `.env.local` in the root directory and add your OpenRouter API key:

```env
OPENROUTER_API_KEY=your_actual_api_key_here
```

**Note:** The file `.env.local` has been created automatically from your `ai-engine/.env` configuration.

### 2. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and test the chat modal.

### 3. Verify Features

✅ **Test Checklist:**

- [ ] Form submission works
- [ ] Chat messages stream in real-time
- [ ] Message counter shows (X/5 remaining)
- [ ] After 5 messages, user is blocked
- [ ] Error messages display correctly
- [ ] Loading indicators appear

## How It Works

### User Flow

```
1. User clicks "chat" button
2. Modal opens with form
3. User fills: Name, Email, Business Type, Team Size, Key Problem, Primary Goal
4. User submits form
5. Chat interface opens
6. User asks questions (max 5)
7. AI responds with personalized advice
```

### Backend Flow

```
Frontend (ChatModal)
    → useChat Hook
    → /api/chat Endpoint
    → Rate Limiter (check 5 msg limit)
    → Validation (sanitize input)
    → ChatService (OpenRouter API)
    → Stream response back
```

## Key Features

### 🔒 Security

- Input validation & sanitization
- Rate limiting (5 msgs/24hrs)
- No injection vulnerabilities
- Secure API key handling

### ⚡ Performance

- Streaming responses (SSE)
- Only last 2 messages sent to LLM
- Max 150 tokens per response
- Edge runtime (minimal latency)

### 📊 Scalability

- Stateless API design
- Ready for Redis migration
- Horizontal scaling ready

## Configuration

All configuration is in these files:

**Rate Limiting:** `src/lib/utils/rateLimiter.ts`

```typescript
MESSAGE_LIMIT = 5;
RESET_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours
```

**AI Model:** `src/lib/services/chatService.ts`

```typescript
model: "mistralai/mistral-7b-instruct:free";
max_tokens: 150;
temperature: 0.7;
```

**System Prompt:** `ai-engine/prompt.txt`

- Edit this file to customize AI behavior

## Troubleshooting

### "Rate limit exceeded"

**Problem:** User sent 5 messages already  
**Solution:** Wait 24 hours or reset manually

### "Invalid API key"

**Problem:** OpenRouter API key not configured  
**Solution:** Add `OPENROUTER_API_KEY` to `ai-engine/.env`

### Slow responses

**Problem:** Network or OpenRouter delay  
**Solution:** Check https://status.openrouter.ai/

### Build errors

**Problem:** Missing dependencies  
**Solution:** Run `npm install`

## Production Deployment

### Environment Variables

```env
OPENROUTER_API_KEY=your_production_key
NODE_ENV=production
```

### Recommended Upgrades

1. **Redis for Rate Limiting**

   - Current: In-memory (resets on restart)
   - Upgrade: Redis for persistent limits

2. **Database for Conversations**

   - Store chat history
   - Enable "load previous conversation"
   - Analytics and insights

3. **Monitoring**
   - Add Sentry for error tracking
   - Add analytics for usage metrics
   - Monitor token usage

## API Reference

### POST /api/chat

**Request:**

```json
{
  "message": "How can AI help my business?",
  "conversationHistory": [
    { "role": "user", "content": "Previous message" },
    { "role": "ai", "content": "Previous response" }
  ],
  "userContext": {
    "userName": "John Doe",
    "userEmail": "john@example.com",
    "businessType": "SaaS",
    "teamSize": "1-5",
    "keyProblem": "Need automation",
    "primaryGoal": "Save time"
  }
}
```

**Response (SSE Stream):**

```
data: {"type":"content","content":"AI can help"}

data: {"type":"content","content":" your business by..."}

data: {"type":"done","messageCount":1,"remainingMessages":4}
```

**Error Response:**

```json
{
  "error": "Rate limit exceeded",
  "message": "You have reached the maximum of 5 messages.",
  "retryAfter": 1705234567890
}
```

## Documentation

📄 **Full Documentation:** `CHATBOT_IMPLEMENTATION.md`  
📋 **Implementation Summary:** `IMPLEMENTATION_COMPLETE.md`

## Support

For issues or questions:

- Email: support@laralabs.in
- Check documentation files
- Review code comments

---

**✅ Setup Complete!** Your AI chatbot is ready to use.

// Quick test script to verify OpenRouter API connectivity
// Run with: node test-openrouter.js

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || 'YOUR_KEY_HERE';

async function testOpenRouter() {
  console.log('Testing OpenRouter API...\n');
  console.log('API Key:', OPENROUTER_API_KEY.substring(0, 20) + '...\n');
  
  const models = [
    'google/gemini-2.0-flash-exp:free',
    'mistralai/mistral-7b-instruct:free',
    'meta-llama/llama-3.2-3b-instruct:free'
  ];

  for (const model of models) {
    console.log(`\nTesting model: ${model}`);
    console.log('─'.repeat(50));
    
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://laralabs.in',
          'X-Title': 'Lara Labs Test'
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'user', content: 'Say hello in 5 words' }
          ],
          max_tokens: 20,
          stream: false
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`❌ FAILED (${response.status}):`, errorText);
      } else {
        const data = await response.json();
        console.log('✅ SUCCESS:', data.choices[0].message.content);
      }
    } catch (error) {
      console.error('❌ ERROR:', error.message);
    }
  }
}

testOpenRouter();

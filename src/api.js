// src/api.js
import axios from 'axios';
import process from 'process';

const openaiApiKey = process.env.VITE_API_URL;

const fetchChatResponse = async (message) => {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      prompt: message,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.9,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
    }
  );

  return response.data.choices[0].text.trim();
};

export default fetchChatResponse

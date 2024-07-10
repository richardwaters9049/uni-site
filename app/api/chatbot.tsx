import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

// Initialize the OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
      max_tokens: 150,
    });

    res.status(200).json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error('Error generating response:', error); // Log the error for debugging
    res.status(500).json({ error: 'Error generating response' });
  }
}

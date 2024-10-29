// pages/api/submit.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { db, serverTimestamp, collection, addDoc } from '../../lib/firebase';
import he from 'he';

type Data = {
  message?: string;
  error?: string;
};

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  return re.test(email);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    let { email, name, message } = req.body;

    // Escape HTML
    email = he.escape(email);
    name = he.escape(name);
    message = he.escape(message);

    // Validate email
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    try {
      await addDoc(collection(db, 'submissions'), {
        email,
        name,
        message,
        timestamp: serverTimestamp(),
      });
      res.status(200).json({ message: 'Submission successful!' });
    } catch (error) {
      console.error('Error writing document: ', error);
      res.status(500).json({ error: 'Error submitting the form. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

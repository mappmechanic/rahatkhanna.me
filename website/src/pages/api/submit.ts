// pages/api/submit.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { db, serverTimestamp, collection, addDoc } from '../../lib/firebase';

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

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

// pages/api/submitEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  // Connect to MongoDB
  const uri: string | undefined = process.env.MONGODB_URI;
  if (!uri) {
    return res.status(500).json({ error: 'MongoDB URI is not defined' });
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    uri_decode_auth: true // Decode username and password
  } as MongoClientOptions);

  try {
    await client.connect();

    const database = client.db('Cluster0');
    const collection = database.collection('emails');

    // Insert the email into the database
    await collection.insertOne({ email });

    res.status(200).json({ message: 'Email submitted successfully' });
  } catch (error) {
    console.error('Error submitting email:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

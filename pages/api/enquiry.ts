import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phone, message } = req.body;
  console.log(name, email, phone, message);
  const uri: string | undefined = process.env.MONGODB_URI;
  if (!uri) {
    return res.status(500).json({ error: 'MongoDB URI is not defined' });
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions);

  try {
    await client.connect();

    const database = client.db('Bizassist');
    const collection = database.collection('enquiries');
    const timestamp = new Date().toISOString();

    await collection.insertOne({ name, email, phone, message, timestamp });

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}

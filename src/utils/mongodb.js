// utils/mongodb.js
import { MongoClient } from 'mongodb';

let client;
let clientPromise;

// Check if we're in development or production
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// In development mode, use a global variable to maintain connection across hot-reloads
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, use a new MongoClient for each request
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;

export async function getDatabase() {
  const client = await clientPromise;
  return client.db('test'); // Your database name
}

export async function getCollection(collectionName) {
  const db = await getDatabase();
  return db.collection(collectionName);
}
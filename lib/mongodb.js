import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

if (!process.env.MONGO_URI) {
  throw new Error("Please add MONGO_URI to .env.local");
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

export default clientPromise;

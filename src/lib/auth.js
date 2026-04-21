import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db();

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 

  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});





/**
 * 1. better auth: install
 * 2. .env variable create
 *    -BETTER_AUTH_SECRET=bV2PhB0QymeQaneTp2hsUm559RHaqZky
      -BETTER_AUTH_URL=http://localhost:3000
 * 3. create auth instance
 * 4. use auth instance in your app
 * 5. 
 * / 
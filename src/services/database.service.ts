// import {MongoClient,ServerApiVersion,Collection} from "mongodb";
// import * as dotenv from "dotenv";

// export const collections: { tokens?: Collection } = {}

// export async function connectToDatabase () {
//     dotenv.config();
 
//     const client = new MongoClient(process.env.DB_CONN_STRING, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
            
//     await client.connect();
        
//     const db = client.db(process.env.DB_NAME);
   
//     const gamesCollection = db.collection(process.env.GAMES_COLLECTION_NAME);
 
//     collections.tokens = gamesCollection;
       
//          console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
//  }


import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";


// export const collections: { Token?: mongoDB.Collection } = {}

// export async function connectToDatabase () {
//     dotenv.config();
 
//     const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb+srv://mongots:6nU2vqM2DXd3m5V@cluster0.ydbgolq.mongodb.net/?retryWrites=true&w=majority"); 
//     await client.connect();
        
//     const db: mongoDB.Db = client.db(process.env.DB_NAME);
//     const TokensCollection: mongoDB.Collection = db.collection("Token");
//     collections.Token = TokensCollection;
//     // //    
//     console.log(`Successfully connected to database: ${db.databaseName} and collection: ${TokensCollection.collectionName}`);
//  }
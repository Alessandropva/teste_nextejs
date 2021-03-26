import {MongoClient} from 'mongodb';

let uri =process.env.NEXT_PUBLIC_MONGODB_URI;
let dbname = process.env.NEXT_PUBLIC_MONGODB_DB;

let cachedClient = null;
let cachedDb = null; 

if(!uri){
throw new Error('uri nao correspondente');
}
if(!dbname){
    throw new Error('nome DB nao correspondente');
    }
      
    export  async function connectToDatebase(){
       if(cachedClient && cachedDb){
           return {client: cachedClient, db: cachedClient}
       }
   
       const client = await MongoClient.connect(uri,
        {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
       
       const db = await client.db(dbname);
       cachedClient = client; 
       cachedDb = db; 
       return{client: cachedClient, db: cachedDb};
    }


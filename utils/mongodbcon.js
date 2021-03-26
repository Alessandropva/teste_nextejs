import {MongoClient} from 'mongodb';

let uri ='mongodb+srv://aula_mongo:dida1410@cluster0.egmpn.mongodb.net/testeapi?retryWrites=true&w=majority';
let dbname ='testeapi';

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


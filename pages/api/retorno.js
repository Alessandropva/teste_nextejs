import {connectToDatebase} from '../../utils/mongodbcon'
const handler = async (req, res)=>{
    try {
        
        const {method} = req;

        switch (method) {
            case 'GET':
              const {db} = await connectToDatebase();
              const colection = await db.collection('user');

              const data = await colection.find().toArray();
              res.status(200).json(data);
               
                break;
        
            default:
                res.setHeader('Allow', ['GET','PUT']);
                res.status(405).end(`Method ${method} Not Allow`);
                break;
        }
       
    } catch (error) {
        res.status(500).json({statusCod: 500, messag: err.message});
    }

}

export default handler;

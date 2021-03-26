import {connectToDatebase} from '../../utils/mongodbcon'

const inserir = async (req, res)=>{
    try {
        
        const {method} = req;

        switch (method) {
            case 'POST':
              let data = req.body;
              const {db} = await connectToDatebase();
              const colection = await db.collection('user');
              
               await colection.insertOne(data);
               res.status(200).json({ok: true});
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

export default inserir;

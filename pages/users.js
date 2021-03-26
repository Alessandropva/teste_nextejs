import React, {useState} from 'react';
import axios from 'axios';

function Users({data}){
   const [users, setusers] = useState([]);
    const [form, setform] = useState({name:'', email:'',tel:''}); 
    const [carro, setcarro] = useState('uno');
    
     const handle = (e)=>{
        setnomes(e.target.value);

     }
          
     const inserirdado= async ()=>{
      await axios.post('http://localhost:3000/api/insert', form);
     }
     
    return(
        <div>
            <label>nome: </label> <br/>
            <input type="text" name="fnome"  value={form.name} onChange={(e)=>setform({...form, name: e.target.value})}/> 
            <br/>
            <label>email: </label> <br/>
            <input type="email" name="femail"  value={form.email} onChange={(e)=>setform({...form, email: e.target.value})}/>
            <br/>
            <label>telefone: </label> <br/>
            <input type="namber" name="ftelfone"  value={form.tel} onChange={(e)=>setform({...form, tel: e.target.value})}/>
            <br/>
            <button onClick={()=>inserirdado()}>inserir</button>
            <br/>
            
            <label>selecione</label >
            <select value={carro} onChange={(e)=>setcarro(e.target.value)}>
                  <option value="monza">monza</option>
                  <option value="fusca">fusca</option>
                  <option value="golf">golf</option>
                  <option value="uno">uno</option> 
            </select>
           <p>{carro}</p>


            <ul>
            {data.map((item,ind)=>{
               return <li key={ind}>{ind} nome:{item.name}</li>
            })}
            </ul>
        </div>
    )
}

export async function getServerSideProps(context) {

    const response = await axios.get('http://localhost:3000/api/retorno');
    const data = await response.data;
    if(!data){
        return {
            notFound: true,
          }
    }
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default Users;
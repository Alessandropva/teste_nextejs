import React, {useState} from 'react';
//import axios from 'axios';

function Users({data}){
   const [users, setusers] = useState([]);
    const [nomes, setnomes] = useState('digite aqui'); 
    const [carro, setcarro] = useState('uno');
    
     const handle = (e)=>{
        setnomes(e.target.value);

     }
   
    return(
        <div>
            <label>teste evento formulario</label>
            <input type="text" name="fnome" value={nomes} onChange={(e)=>handle(e)}/>
            <p>{nomes}</p>
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

    const response = await fetch('http://localhost:3000/api/retorno');
    const data = await response.json();
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
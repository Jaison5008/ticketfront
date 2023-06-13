import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import Base from './Base';
import { toast } from 'react-toastify'; 
import axios from "axios"; 
//import { json } from 'react-router-dom';

 const url="http://localhost:5000";
 function Signup() { 
    
    const [team,setTeam]=useState(''); 
    const [venue,setVenue]=useState(''); 
    
const logged=async()=>{   
  try{
    const payload={team,venue};

   let res= await axios.post(`${url}/match/matchpost`,payload)  
   console.log(res) 
  
 
toast.success(res.data.msg);
}catch(error) {
toast.error('wrr');
}
}

  return (<Base thead=' Match list' tstyle='headstyle'footer='foot' children={ 
    <Form> 
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>team</Form.Label>
        <Form.Control type="email" placeholder="Enter Team" onChange={(e)=>setTeam(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>venue</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setVenue(e.target.value)} />
      </Form.Group>
      
     


      <Button bg="dark" variant="dark" onClick={()=>logged()}>
        Submit
      </Button>
    </Form>}></Base>
  )
}
 

export default Signup;
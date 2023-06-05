import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'; 
import axios from "axios";
 const url="http://localhost:5000";
 function Signup() { 
    
    const [team,setTeam]=useState(''); 
    const [venue,setVenue]=useState(''); 
    
const logged=async()=>{   
  try{
    const payload={team,venue};

   let res= await axios.post(`${url}/match/matchpost`,payload)  
   
toast.success(res.data.msg);
}catch(error) {
toast.error('wrr');
}
}

  return (<>
    <Form> 
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>team</Form.Label>
        <Form.Control type="email" placeholder="Enter Team" onChange={(e)=>setTeam(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>venue</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setVenue(e.target.value)} />
      </Form.Group>
      
     


      <Button variant="primary" onClick={()=>logged()}>
        Submit
      </Button>
    </Form></>
  )
}
 

export default Signup;
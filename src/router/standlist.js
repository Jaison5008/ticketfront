import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'; 
import axios from "axios";
 const url="http://localhost:5000";
 function Signup() { 
    
    const [stand1,setStand1]=useState(''); 
    const [stand2,setStand2]=useState(''); 
    const[id,setId]=useState('');
const logged=async()=>{   
  try{
    const payload={stand1,stand2,id};

   let res= await axios.post(`${url}/stand/standpost`,payload)  
   
toast.success(res.data.msg);
}catch(error) {
toast.error('wrr');
}
}

  return (<>
    <Form> 
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>stand A</Form.Label>
        <Form.Control type="name" placeholder="Enter Team" onChange={(e)=>setStand1(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>stand B</Form.Label>
        <Form.Control type="name" placeholder="Password" onChange={(e)=>setStand2(e.target.value)} />
      </Form.Group>
      
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control type="name" placeholder="Password" onChange={(e)=>setId(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={()=>logged()}>
        Submit
      </Button>
    </Form></>
  )
}
 

export default Signup;
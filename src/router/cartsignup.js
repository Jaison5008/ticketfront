import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'; 
import axios from "axios";  
import { useNavigate } from 'react-router-dom';
 const url="http://localhost:5000";  

 
 function Signup() { 
    const navi=useNavigate()
    const [Ticketcount,setTicketcount]=useState('');  
      const[id,setId]=useState(''); 
      useEffect(()=>{
   setId(sessionStorage.getItem('ss')) 
   
       },[] ) 
       
const logged=async()=>{  
    let payload={Ticketcount,id};
try{  
    let res= await axios.post(`${url}/cart/cartpost`,payload)  
   // setId(sessionStorage.getItem());
 navi('/');
toast.success(res.data.msg);
}catch(error) {
toast.error({error:error});
}
}

  return (
    <Form> 
      

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Ticketcount</Form.Label>
        <Form.Control type="Name" placeholder="Enter Ticketcount" onChange={(e)=>setTicketcount(e.target.value)} />
        
      </Form.Group>


      
      <Button variant="primary" onClick={()=>logged()}>
        Submit
      </Button>
    </Form>
  )
}
 

export default Signup
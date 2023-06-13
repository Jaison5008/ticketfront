import {useNavigate} from 'react-router-dom' 
 import React, { useState } from 'react' 
 import Base from './Base';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'; 
import axios from "axios";
 const url="http://localhost:5000"; 
 
 function Signup() { 
    const navi=useNavigate()
    const [email,setEmail]=useState(''); 
    const [password,setPassword]=useState(''); 
    const [phone,setPhone]=useState(''); 
const logged=async()=>{  
    const payload={email,password,phone}; 
    

try{  
    let res= await axios.post(`${url}/one/oneget`,payload)  
    
toast.success(res.data.msg); 
navi('/'); 
    
}catch(error) {
toast.error('wrong ');
}
}

  return (<><Base thead=' SIGNUP' tstyle='headstyle'footer='foot' children={ 
    <Form> 
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>phone</Form.Label>
        <Form.Control type="phone" placeholder="enter phone" onChange={(e)=>setPhone(e.target.value)} />
        
      </Form.Group> 
      <div style={{display:'flex',justifyContent:'center'}} >
      <Button bg="dark" variant="dark" onClick={()=>logged()}>
        Submit
      </Button></div>
    </Form> }></Base>


<Button  style={{margin:'5px'}} bg="dark" variant="dark" onClick={()=>{navi('/')}}>
        login 
      </Button></>
  )
}
 

export default Signup
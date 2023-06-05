import {useNavigate} from "react-router-dom";
import {  toast } from 'react-toastify'; 
import{useState} from'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from "axios";
 const url="http://localhost:5000";


function Login() { 
  const [email,setEmail]=useState(''); 
  const [password,setPassword]=useState(""); 
  const navi=useNavigate();
    
    const logged=async ()=>{ 
      const payload={email,password}

    try{
     let res= await axios.post(`${url}/one/sign`,payload)   
     
      sessionStorage.setItem('ss',res.data.id)
    
     
     toast.success(res.data.msg);  
 
     navi("/matchlistdisplay"); 
     
    }
    catch(error) { 
      toast.error('login failed')
    }
}
    return(<> 
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
     
      <Button variant="primary" onClick={()=>logged()}>
        Submit
      </Button>
    </Form>
    <Button variant="primary" onClick={()=>navi('/signup')}> signup</Button> 
    
    </>)
  
} 
export default Login;

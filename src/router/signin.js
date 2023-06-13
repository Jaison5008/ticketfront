import {useNavigate} from "react-router-dom";
import {  toast } from 'react-toastify'; 
import{useState} from'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Base from "./Base"
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
    return( <Base thead=' Sign in page' tstyle='headstyle'footer='foot' children={ 
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
     <div style={{display:'flex',justifyContent:'center'}}>
      <Button bg="dark" variant="dark" onClick={()=>logged()}>
        Submit
      </Button></div>
    
    <Button bg="dark" variant="dark" onClick={()=>navi('/Signup')}> signup</Button> 
    
    </Form>
     }/> )
  
} 
export default Login;

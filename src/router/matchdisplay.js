import { toast } from 'react-toastify'; 
 import {Container ,Card,Col,Button} from 'react-bootstrap'; 
 //import Button from 'react-bootstrap/Button'; 
 import Base from './Base';
 import React, { useEffect, useState } from 'react'
 import axios from "axios"; 
 import {  useNavigate } from 'react-router-dom';
 const url="http://localhost:5000";


 function Signup(props) {  
  const [data ,setData]=useState([]);   
 
    const navi=useNavigate()  

    useEffect(()=>{  
      
         display();
      
  })   
  const hi=(e)=>{   
    const m= JSON.stringify(e)
  sessionStorage.setItem('token',m);
    props.add(e)
    navi(`/standdisplay/${e._id}` )
  }
 
   const display=async()=>{   
    
    const res =  await axios.get(`${url}/match/matchget`);  
    
    //console.log(res)
     if(res){
    setData(res.data.msg);  
   }  
      else{ 
      toast.error("faild")
       }
    }
      return ( <Base thead=' Match LIST' tstyle='headstyle'footer='foot' children={ 
        <div className="App">   
        {data.map((e,i)=>
   <Container className='p-4'>  
  <Col md="4">  
  <Card>  
  
  
  <Card.Body key={e._id}>   
    <Card.Title >{e.team}</Card.Title>  
    <Card.Text> {e.venue} 
   
    </Card.Text>  
    <Button bg="dark" variant="dark" onClick={()=>{hi(e)}}>Book</Button>  
  </Card.Body>  
</Card>  
    </Col>  
</Container>)}  
    </div>  
   
  



    
        }></Base>)
} 
export default Signup;

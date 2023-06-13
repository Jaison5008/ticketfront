 import { toast } from 'react-toastify'; 
 import {Container,Col,Card,Button} from 'react-bootstrap'; 
 //import Button from 'react-bootstrap/Button';
 import React, { useEffect, useState } from 'react'
 import axios from "axios";  
 import { useParams } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom'; 
 import Base from './Base';
 const url="http://localhost:5000";

 function Signup(props) {  
    const [dat ,setData]=useState([]);   
    const{id}=useParams();
    // let token  =sessionStorage.getItem('token') 
      const navigator=useNavigate()  
  //console.log(id);
      useEffect(()=>{  
        
           display();
        
    }) 
    const hi=(e)=>{  
       props.add2 (e); 
       const m= JSON.stringify(e)
       sessionStorage.setItem('tok',m);
      navigator("/cartsignup")
    }
    
     const display=async()=>{   
      
      const res =  await axios.get(`${url}/stand/standget/${id}`) ;
      //console.log(res);
       if(res){
      setData(res.data.msg);  
     }  
        else{ 
        toast.error("faild")
         }
       
       
       
     }
    
        
     
     
    
     return (  <Base thead=' STANDS ' tstyle='headstyle'footer='foot' children={ 
      <div className="App">   
      
 <Container className='p-4'>  
<Col md="4">  
<Card>  


<Card.Body key={dat.id}>   
  <Card.Title >{dat.stand1}</Card.Title>  
  
  <Button bg="dark" variant="dark" onClick={()=>{hi(dat.stand1)}}>Book</Button>  
</Card.Body>  
</Card>  
  </Col>  
</Container> 


<Container className='p-4'>  
<Col md="4">  
<Card>  


<Card.Body>   
  <Card.Title >{dat.stand2}</Card.Title>  
  
  <Button  bg="dark" variant="dark" onClick={()=>{hi(dat.stand2)}}>Book</Button>  
</Card.Body>  
</Card>  
  </Col>  
</Container>
  </div>  
 




  
      }></Base>)
     
     
 } 
  export default Signup;
  
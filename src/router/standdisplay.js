 import { toast } from 'react-toastify'; 
 import Table from 'react-bootstrap/Table'; 
 import Button from 'react-bootstrap/Button';
 import React, { useEffect, useState } from 'react'
 import axios from "axios";  
 import { useParams } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';
 const url="http://localhost:5000";

 function Signup() {  
    const [dat ,setData]=useState([]);   
    const{id}=useParams();
    // let token  =sessionStorage.getItem('token') 
      const navigator=useNavigate()  
  //console.log(id);
      useEffect(()=>{  
        
           display();
        
    }) 
    const hi=()=>{ 
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
    
        
     
     
    
     return (
      <Table striped bordered hover>
       
       <tbody> 
         
        <tr key={dat._id}>
           <td>{1}</td>
           <td>{dat.stand1}</td> 
           <Button onClick={()=>{hi()}}>Book</Button>
           <td>{dat.stand2}</td>
           <Button onClick={()=>{hi()}} >Book</Button>
         </tr>
       
       </tbody>
     </Table>
     
   )
 } 
  export default Signup;
  
import { toast } from 'react-toastify'; 
 import Table from 'react-bootstrap/Table'; 
 import Button from 'react-bootstrap/Button'; 
 
 import React, { useEffect, useState } from 'react'
 import axios from "axios"; 
 import { useNavigate } from 'react-router-dom';
 const url="http://localhost:5000";


 function Signup() {  
  const [data ,setData]=useState([]);  
  // let token  =sessionStorage.getItem('token') 
    const navi=useNavigate()  

    useEffect(()=>{  
      
         display();
      
  },[])   
  const hi=(id)=>{ 
    navi(`/standdisplay/${id}` )
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
      return (
     <Table striped bordered hover>
      
      <tbody> 
        {data.map((e,i)=>{
       return <tr key={e._id}>
          <td>{i+1}</td>
          <td>{e.team}</td>
          <td>{e.venue}</td>
          <Button onClick={()=>{hi(e._id)}} >Book</Button>
        </tr>
      })}
      </tbody>
    </Table>
    
  )
} 
export default Signup;

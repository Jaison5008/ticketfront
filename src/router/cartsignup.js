import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'; 
import axios from "axios";  
import {  useNavigate } from 'react-router-dom';
import Base from './Base';
 const url="http://localhost:5000";  

 
 function Signup() {  
  
    const navi=useNavigate()
    const [Ticketcount,setTicketcount]=useState(0);   
  
   const c= JSON.parse(sessionStorage.getItem('token'));  
   const cc= JSON.parse(sessionStorage.getItem('tok')); 
   console.log(c)
   const Ids=c._id;
    const team =c.team; 
    const venue=c.venue; 
    const stand=cc;
    const[Id,setId]=useState()
     console.log(Id)
      
      useEffect(()=>{ 
      //  sessionStorage.setItem('mm',req.body._id)
   setId(sessionStorage.getItem('ss')) 
   
       },[] ) 
       
const logged=async()=>{  
    let payload={team,venue,stand,Ticketcount,Ids,Id}; 
   
try{  
    let res= await axios.post(`${url}/cart/cartpost`,payload)  
   
    navi(`/save/${Id}`);
toast.success(res.data.msg); 

}catch(error) {
toast.error({error:error});
}
}

  return (<Base thead=' Ticket' tstyle='headstyle'footer='foot' children={<div>
    
  
    <h2>Team :{c.team}</h2> 
    <h2>Venue:{c.venue}</h2>  
    <h2>Id:{c._id}</h2>   
    <h2>Stand:{cc}</h2> 
<Button bg="dark" variant="dark" style={{padding:'5px'}} onClick={()=>setTicketcount(Ticketcount+1)}>+</Button>{(Ticketcount > 0)  ?(<h2>{Ticketcount}</h2>):<h2>0</h2>}<Button bg="dark" variant="dark" style={{padding:'5px'}} onClick={()=>setTicketcount(Ticketcount-1)}>-</Button>
<div>
<Button bg="dark" variant="dark" onClick={()=>logged()}>confirm</Button></div>
</div>  }>
    


      
      </Base>
  )
}
 

export default Signup 



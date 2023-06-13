import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {  useEffect, useState } from 'react'  
import axios  from 'axios'  
import { Button ,Container ,Card, Col } from 'react-bootstrap';
//import '../index.css';
const url="https://ticketbackend-8ki0.onrender.com";

const Save = ()=> {   
  const[datas,setData]=useState([]);  
  const {Id}=useParams()
 const navi=useNavigate()
  useEffect(()=>{  
    
    dispalay()
  }) 
    const  dispalay= async()=>{
    const res =  await axios.get(`${url}/cart/cartget/${Id}`);    
    console.log(res.data.msg)
     setData(res.data.msg)
    }
 
  return ( <><div style={{display:'flex',justifyContent:'center'}}>
  <Button bg="dark" variant="dark"  onClick={()=>{navi('/')}}>home</Button> 
  </div>

 {datas.map((dat,i)=>  
  <Container className='p-4' key={i}>  
  <Col md="4">  
  <Card>  
  <div>
    <h1>{dat.team}</h1>
    <h1> {dat.venue}</h1>
    <h1> {dat.Ticketcount}</h1>
    <h1> {dat.Ids}</h1></div> 
    
     </Card>  
    </Col>      
</Container> )}  



  </>
    )
    
   
   
 


}

export default Save;
import {BrowserRouter,Routes,Route}from "react-router-dom"; 
import Usersignup from "./router/usersignup";
import Signin from "./router/signin"; 
import Matchlistsignup from "./router/match.listsignup";
import Matchlistdisplay from "./router/matchdisplay"; 
import Standsignup from "./router/standlist";
import Standdisplay from "./router/standdisplay"; 
import Cartdisplay from "./router/cartsignup"; 
import Navbar from "./router/Navbar" 
import Ground from "./router/ground" 
import Foot from "./router/Foot"; 
import Conditions from "./router/Conditions"; 
import Save from "./router/Save"
import { useState } from "react";
export const url="https://ticketbackend-8ki0.onrender.com";
function App() {   
  const [user,setUser]=useState([]) 
  const [num, setNum]=useState([]) 
  //const [count,setCount]=useState([])
  const add =(use)=>{ 
   setUser(use); 
   
  }  
  
  const add2 =(use)=>{ 
    
    setNum(use)
   }
console.log(user)
console.log(num)

  return (
    <div className="App"> 

    <BrowserRouter>  
    <Navbar/>
    <Routes> 
   
    <Route exact path="/" element={<Signin/> }/>  
    <Route path="/Signup" element={<Usersignup/> }/> 
    <Route path="/matchlistsignup" element={<Matchlistsignup/> }/> 
   <Route path="/matchlistdisplay" element={<Matchlistdisplay add={add}/>}/> 
    <Route path="/standsignup" element={<Standsignup/> }/> 
    <Route path="/standdisplay/:id" element={<Standdisplay add2={add2}/>}/>  
    <Route path="/cartsignup" element={<Cartdisplay  />}/>  
    <Route path="/ground" Component={Ground}/> 
    <Route path="/conditions" Component={Conditions}/>  
    <Route path="/save/:Id"element={<Save/>}/>
      </Routes> 
      <Foot/>
      </BrowserRouter>
    </div>
  );
}

export default App;





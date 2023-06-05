import {BrowserRouter,Routes,Route}from "react-router-dom"; 
import Usersignup from "./router/usersignup";
import Signin from "./router/signin"; 
import Matchlistsignup from "./router/match.listsignup";
import Matchlistdisplay from "./router/matchdisplay"; 
import Standsignup from "./router/standlist";
import Standdisplay from "./router/standdisplay"; 
import Cartdisplay from "./router/cartsignup";
export const url="http://localhost:5000";
function App() {
  return (
    <div className="App"> 

    <BrowserRouter> 
    <Routes> 
    <Route path="/signup" element={<Usersignup/> }/> 
    <Route path="/" element={<Signin/> }/> 
    <Route path="/matchlistsignup" element={<Matchlistsignup/> }/> 
    <Route path="/matchlistdisplay" element={<Matchlistdisplay/>}/> 
    <Route path="/standsignup" element={<Standsignup/> }/> 
    <Route path="/standdisplay/:id" element={<Standdisplay/>}/>  
    <Route path="/cartsignup" element={<Cartdisplay/>}/>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





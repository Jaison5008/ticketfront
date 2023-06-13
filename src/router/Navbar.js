import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { useNavigate } from 'react-router-dom';

function ColorSchemesExample() { 
  const history=useNavigate()
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{borderRadius:'5px' ,border:'2px solid blue',margin:'5px 0'}}>
        <Container>
          <Navbar.Brand href="/">ICC-Worldcup</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link onClick={()=>history('/')}>Home</Nav.Link> 
             
           <Nav.Link onClick={()=>history('/ground')} >Ground</Nav.Link>
            <Nav.Link onClick={()=>history('/conditions')}>Price</Nav.Link>

            
          </Nav>
        </Container>
      </Navbar >
      
    </>
  );
}

export default ColorSchemesExample;

import React  from 'react';
import {Button} from "react-bootstrap"
import { Navbar,Nav,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Header = ()=>{
  const Navigate = useNavigate()
    

    return(

    <>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/addUser">Add User</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>
<div style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
 {/* <Button variant="primary" onClick={()=>Navigate("/addUser")}  style={{textAlign:"center"}} size="lg" style={{marginTop:"10px"}} >
       Add User
  </Button> */}
  </div>
  

    
    </>

    )

}


export default Header




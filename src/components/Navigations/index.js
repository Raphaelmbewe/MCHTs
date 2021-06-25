import React from 'react';
import './navigation.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav , Container} from 'react-bootstrap';
import Logo from '../../images/logo.png'
export const Navigation = ()=>{

    return (
      <div>
        <Container container-fluid>
          <Navbar expand='lg' className='fixed-top nav-background '>
            <Navbar.Brand href='/'>
              <div className='logoAndName'>
                <img src={Logo} alt='' className=' align-top img-fluid logo' />
                <div className='nameTag'>
                  <div className='nameFP'> My Community </div>
                  Health
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto my-nav-items  text-secondary '>
                <Nav.Link href='/' className='text-dark'>
                  Home
                </Nav.Link>
                <Nav.Link href='/services' className='text-secondary'>
                  Services
                </Nav.Link>
                <Nav.Link href='/about' className='text-secondary'>
                  About Us
                </Nav.Link>
                <Nav.Link href='/contact' className='text-secondary'>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    );
}
import React, { useEffect, useState } from 'react';
import './Header.css'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineShopping} from 'react-icons/ai'
import logo from '../../../images/logo.png'
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {

    //setting state for navbar background change when active

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 20){
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll',changeBackground)
    })
    return (

   <div className='d-flex justify-content-between w-100'>
     <Navbar className={navbar ? "active" : "nav"} collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home">
      <img className='ms-4 w-5' src={logo} alt='logo' width='50%'></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link href="">The Reformer</Nav.Link>
      <Nav.Link href="">Workouts</Nav.Link>
      <Nav.Link className='active-link' href="#about">About</Nav.Link>
      <Nav.Link href=""><CgProfile/></Nav.Link>
      <Nav.Link href="" className=' me-5'>
          <i className='cart' value='2'><AiOutlineShopping></AiOutlineShopping></i>
      </Nav.Link>
      <Nav.Link href="" className=''>
      <button className=' shop-btn'>Shop Now</button>
      </Nav.Link> 
    </Nav>
  </Navbar.Collapse>

</Navbar>
     
 </div>
    );
};

export default Header;
import React from 'react'
import'./header.css'
import{Container, Navbar, Nav } from "react-bootstrap"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/kacchilogo.jpg"
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="" /> <FaFacebook/> <FaInstagram/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link className='item' as={Link} to="/">হোম</Nav.Link>
        <Nav.Link className='item' as={Link} to="/item">মেনু</Nav.Link>
          <Nav.Link className='item' href="#অফার">অফার</Nav.Link>
          <Nav.Link className='item' href="#ব্রাঞ্চসমূহ">ব্রাঞ্চসমূহ</Nav.Link>
          <Nav.Link className='item' href="#অর্ডার প্রসেস">অর্ডার প্রসেস</Nav.Link>
          <Nav.Link className='item' href="#আমাদের সম্পর্কে">আমাদের সম্পর্কে</Nav.Link>
        </Nav>
        <button type='submit'>বুকিং</button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
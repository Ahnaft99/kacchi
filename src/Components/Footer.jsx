import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { MdGroups } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import ami from '../assets/kacchilogo.jpg'
const Footer = () => {
  return (
    <section id=''>
   <Container >
    <div className='footer'>
    <Row >
        <Col lg={6}>
        <div className="left">
       
        <h3> <MdGroups className='icon'/> Our Official FB Group</h3>
        <p> Join the 116K+ people</p>
        </div>
        </Col>
        <Col lg={6} className='right'>
        <a href="#">Join Now</a>
        </Col>
    </Row>
    </div>
    </Container>
    <div className="bottom">
    <Row>
     <Col lg={3}>
     <img src={ami} alt="" />
     <div className="media">
     <a href="#"><FaFacebook /></a> 
     <a href="#"><FaInstagram /></a> 
     <a href="#"><BsTiktok /></a>
     </div>
    
     </Col>
     <Col lg={3}>
     <div className="list">
     <ul><h4>Product</h4>
        <li> <a href="#">Menu</a></li>
        <li><a href="#">Price List</a> </li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">Updates</a></li>
        
    </ul>
     </div>
    
     </Col>
     <Col lg={3}>
     <div className="list">
     <ul><h4>Company</h4>
     <li> <a href="#">About Us</a></li>
        <li><a href="#">Branch Contacts with Menu</a> </li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Careers</a></li>
        
    </ul>
     </div>
          </Col>
     <Col lg={3}>
     <div className="list">
     <ul><h4>Support</h4>
     <li> <a href="#">Help center</a></li>
        <li><a href="#">Report a bug</a> </li>
        
        
    </ul>
     </div>
     </Col>
     </Row>
    </div>
    
 
    </section>
  )
}

export default Footer
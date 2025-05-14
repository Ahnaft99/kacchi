import React from 'react'
import './sm.css'
import{Col, Container, Row,} from 'react-bootstrap'
import basmoti from'../assets/basmoti.jpg'
import Reusable from './SmResuable/Reusable';
import khadok from '../assets/khadok.jpg'
import basmoti3 from'../assets/basmoti3.jpg'
import polau from '../assets/polau.jpg'

const Sm = () => {
  return (
    <section id='মেনু'>
        
          <Container>
            <Row>
            <Col lg={12}>
            <div className="main">
                <h1>আমাদের স্পেশাল মেনু</h1>
                <div className="menu">
                <a href="#">জনপ্রিয়</a>
                <a href="#">কাচ্চি</a>
                <a href="#">পোলাও</a>
                <a href="#">চুইগোস্ত</a>
                <a href="#">মিস্টান্ন ও পানীয়</a>
                <a href="#">অন্যান্য</a>
            </div>
            
            <Row>
               <Reusable title ="বাসমতি কাচ্চি" img={basmoti} paragraph ='১ জন = ৩০০ টাকা ' para='৩ জন = ৮৯০ টাকা ' last='৫জন = ৮৯০ টাকা '/> 
               <Reusable title ="কাচ্চি খাদক" img={khadok} paragraph ='১ জন = ৩০০ টাকা ' para='৩ জন = ৮৯০ টাকা ' last='৫জন = ৮৯০ টাকা '/>
               <Reusable title ="বাসমতি কাচ্চি,বোরহানী,ফিরনি" img={basmoti3} paragraph ='১ জন = ৩০০ টাকা ' para='৩ জন = ৮৯০ টাকা ' last='৫জন = ৮৯০ টাকা '/>
               <Reusable title ="প্লেইন পোলাও,মুরগীর রোষ্ট,বোরহানী" img={polau} paragraph ='১ জন = ৩০০ টাকা ' para='৩ জন = ৮৯০ টাকা ' last='৫জন = ৮৯০ টাকা '/>
            </Row>
            
            </div>
            
            
            </Col>
            </Row>
          </Container>
        
    </section>
  )
}

export default Sm
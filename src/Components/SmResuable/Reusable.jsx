import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import {Col} from 'react-bootstrap'
const Reusable = ({title, img, paragraph, para, last,}) => {
  return (
    <Col lg={3}>
    
<Card.Img className='img' variant="top" src={img} />
<Card.Body>
<Card.Title className='title'>{title}</Card.Title>
<Card.Text  >
    <ul className='para'>
        <li>{paragraph}</li>
        <li>{para}</li>
        <li>{last}</li>
        
    
    </ul>

</Card.Text>
<Button variant="primary">Order Now</Button>
</Card.Body>
    </Col>
  )
}

export default Reusable
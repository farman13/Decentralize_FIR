import { Link } from 'react-router-dom';
import React from 'react';
import { Card,Row,Nav } from 'react-bootstrap';

function CardComponent({fir}) {
  return (
    <Row xs={1} md={5} className="g-4">
  {fir && (fir.map((fir)=>{
   if(fir.isapproved==true && fir.isresolved==false){
     return (      
<Card style={{ width: '18rem', margin: '10px', padding: '15px', borderRadius: '10px' }} bg="light" text="dark" border="primary">
<Card.Header>ID : {(fir.id).toString()}</Card.Header>
  <Card.Body>
    <Card.Title>Title :{fir.title}</Card.Title>
    <Card.Subtitle className="mb-2 ">Victim name: {(fir.name).toString()}</Card.Subtitle>  
    <Nav.Link as={Link} to={`/viewFir/${Number(fir.id)}`}val className="btn btn-primary rounded-pill"
          style={{ textDecoration: 'none', color: '#fff' }} > view</Nav.Link>
  </Card.Body>
</Card>
  )
}
}))}
</Row>
  );
}

export default CardComponent;

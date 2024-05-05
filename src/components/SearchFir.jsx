import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const SearchFir = ({contract})=>{

    const[fir,setfir] = useState(null);
    async function Search(event){
      event.preventDefault();//page will not reload if form get submitted
        try{
          const number = document.querySelector("#firnumber").value;
           const arr =  await contract.complaints(number);
            setfir(arr);
        }catch(error){
         alert(error)
        }
        console.log(fir); 
     }
  
   return(
   <>
      <Container className="mt-5">
        <h1>Search FIR</h1>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={Search}>
            <Form.Group controlId="firnumber">
              <Form.Label>Enter FIR Number</Form.Label>
              <Form.Control type="text" placeholder="FIR Number" />
            </Form.Group>
            <br></br>
            <div className="text-center">
            <Button variant="primary" type="submit">
              Search
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    {fir&&(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th colSpan={2}>Complaint Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Complaint Id:</td>
          <td>{(fir.id).toString()}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Complaint by:</td>
          <td>{(fir.name).toString()}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Complaint Title:</td>
          <td>{fir.title}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Complaint Description:</td>
          <td>{fir.description}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Approval Status:</td>
          <td>{fir.isapproved ? "Approved" : !fir.isexits ? "Declined" : "Approval Pending"}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Approval Remark:</td>
          <td>{fir.approvalremark}</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Resolution Status:</td>
          <td>{fir.isresolved ? "Resolved" : "Resolution pending"}</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Resolution Remark:</td>
          <td>{fir.resolution_remark}</td>
        </tr>
      </tbody>
    </Table>
  )
}
   </>
   )
}
export default SearchFir;

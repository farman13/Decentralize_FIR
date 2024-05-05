import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const Register = ({contract})=>{

    async function register(event){
        try{
            event.preventDefault();//page will not reload if form get submitted
            const Name = document.querySelector("#name").value;
            const Title = document.querySelector("#title").value;
            const Description = document.querySelector("#description").value;
            await contract.filecomplaint(Name,Title,Description);
            alert("Registered")
        }catch(error){
         alert(error)
        }       
     }
   return<>
   <br></br><br></br><br></br>
    <Container className="p-5 rounded-lg shadow-lg bg-light">
      <br></br>
      <h1 className="text-secondary text-center mb-4">Register a Complaint</h1>
      <Form onSubmit={register}> 
        <Row className="mb-3">
          <Form.Group as={Col} controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="text" 
              name="fullName"
              placeholder="Enter full name" 
              id='name'
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="address">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              name="title"  
              placeholder="Enter address"
              id='title' 
              required
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="incidentDetails">
          <Form.Label>Incident Details</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name="incidentDetails" 
            id='description'
            placeholder="Enter details of the incident" 
            required
          />
        </Form.Group>
        <div className="text-center">
        <Button variant="primary" className="px-4" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </Container>
   </>
}
export default Register;

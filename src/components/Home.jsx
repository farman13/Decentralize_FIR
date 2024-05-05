import './Home.css'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import {  Col } from 'react-bootstrap';
import CardComponent from './CardComponent';
import CardComponent1 from './CardComponent1';
import CardComponent2 from './CardComponent2';
import Dashboard from './Dashboard';
import { FaListAlt, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const Home=({fir})=>{

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

return(
    <>
      <div className="designing-quote">
        <h1>Empowering Security</h1>
       <h1>Ensuring Trust</h1>
      </div>

      <div className="background"></div>
   
<br></br><br></br><br></br><br></br><br></br><br></br>

<Container>
      <Navbar bg="success" expand="lg" variant="dark" className="shadow-sm py-3">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-5">
            <Nav.Link onClick={() => handleTabChange('tab1')} active={activeTab === 'tab1'} className="mr-4"><FaListAlt className="mr-1" />Registered FIRs</Nav.Link>
            <Nav.Link onClick={() => handleTabChange('tab2')} active={activeTab === 'tab2'} className="mr-4"><FaFileAlt className="mr-1" />Opened FIRs</Nav.Link>
            <Nav.Link onClick={() => handleTabChange('tab3')} active={activeTab === 'tab3'}> <FaCheckCircle className="mr-1" />Closed FIRs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br></br><br></br>
      <Row>
        <Col>
          {activeTab === 'tab1' && <CardComponent fir={fir} />}
          {activeTab === 'tab2' && <CardComponent1  fir={fir} />}
          {activeTab === 'tab3' && <CardComponent2 fir={fir} />}
        </Col>
      </Row>
    </Container>
    <br></br><br></br>

    <Dashboard fir={fir} />
   
    </>
)
    }
    
export default Home;


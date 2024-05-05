import React, { useState ,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatCard from './StatCard';
import './Dashboard.css'

const Dashboard = ({fir}) => {

     const[TotalFir,setTotalFir] = useState(0);
     const[ResolvedFir,setResolvedFir] = useState(0);
     const[PendingFir,setPendingFir] = useState(0);
     
     useEffect(() => {;
        let r = 0;
        let p = 0;
    
        if (fir !== null) {
          fir.forEach((firItem) => {
            if (firItem.isapproved === true && firItem.isresolved === false) {
              p++;
            } else if (
              (firItem.isapproved === true && firItem.isresolved === true) ||
              (firItem.isapproved === false && firItem.isexits === false)
            ) {
              r++;
            }
          });
          setTotalFir(fir.length);
          setResolvedFir(r);
          setPendingFir(p);
        }
    
      }, [fir]);
    return (
        <>
     <Container className="dashboard-container">
      <h1 className="dashboard-heading">FIR Statistics Dashboard</h1>
      <Row>
        <Col>
          <StatCard title="Total FIRs" value={TotalFir} className="stat-card total-firs" />
        </Col>
        <Col>
          <StatCard title="Resolved FIRs" value={ResolvedFir} className="stat-card resolved-firs" />
        </Col>
        <Col>
          <StatCard title="Pending FIRs" value={PendingFir} className="stat-card pending-firs" />
        </Col>
      </Row>
    </Container>
      <br></br><br></br>
      </>
    );
  };
  
  export default Dashboard;
  
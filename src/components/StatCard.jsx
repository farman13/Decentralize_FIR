import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFileAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const getIcon = (title) => {
    switch (title.toLowerCase()) {
        case 'total firs':
          return <FaFileAlt size={30} color="#C5492E"/>;
        case 'resolved firs':
          return <FaCheckCircle size={30} color="#4A9E1D" />;
        case 'pending firs':
          return <FaExclamationCircle size={30} color='DE5E1A'/>;
        default:
          return null;
      }
};

const StatCard = ({ title, value }) => {
  return (
    <Card className="shadow mb-4 rounded custom-card">
    <Card.Body className="d-flex align-items-center justify-content-center">
      <div style={{ marginRight: '10px' }} className="mr-5">{getIcon(title)}</div>
      <div>
        <Card.Text style={{ fontSize: '28px' , marginLeft: '40px'}}>{value}</Card.Text>
        <Card.Title className="mb-0" style={{ fontSize: '24px'}}>{title}</Card.Title>
      </div>
    </Card.Body>
  </Card>
  );
};

export default StatCard;
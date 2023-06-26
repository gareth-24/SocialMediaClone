import React from 'react';
import Card from 'react-bootstrap/Card';
import turtleKidImage from './../img/i-like-turtles.jpg';
import { Col, Row } from 'react-bootstrap';

function Bio() {
  return (
  <Card>
    <Card.Body>
      <img src={turtleKidImage} />
      <hr />
      <Card.Title>Jonathan, the zombie</Card.Title>
      <Card.Text>
        <p>Hey I like turtles too</p>
      </Card.Text>
      <hr />
      <Row>
        <Col>
          <Card.Link href="#">tweets</Card.Link>
        </Col>
        <Col>
          <Card.Link href="#">followers</Card.Link>
        </Col>
        <Col>
          <Card.Link href="#">following</Card.Link>
        </Col>
      </Row>
    </Card.Body>
  </Card>
  );
}

export default Bio; 
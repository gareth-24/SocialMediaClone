import React from 'react';
import Card from 'react-bootstrap/Card';
import turtleKidImage from './../img/i-like-turtles.jpg';

function Bio() {
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <img src={turtleKidImage} />
      <Card.Title>Turtle Kid</Card.Title>
      <Card.Text>
        <p>Hey I like turtles too</p>
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default Bio; 
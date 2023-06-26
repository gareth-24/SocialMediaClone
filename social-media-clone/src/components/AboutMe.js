import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';

function AboutMe() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Currently</Accordion.Header>
        <Accordion.Body>
          Living in Seattle, WA. Working as a Software Engineer at Amazon. Part-time engineer, full-time turtle.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Likes</Accordion.Header>
        <Accordion.Body>
          Turtles, coffee, and the color green.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Dislikes</Accordion.Header>
        <Accordion.Body>
          Non-turtle stuff, anywhere where turtles aren't welcome, and olives.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AboutMe;
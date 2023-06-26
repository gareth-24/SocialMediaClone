import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";

function User(props){
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.names}</Card.Title>
          <Card.Text>
            <p>{props.tagline}</p>
            <Button>follow</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
}

User.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string
};

{/* <Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>User1</Card.Title>
  <Card.Text>
    <p></p>
  </Card.Text>
</Card.Body>
</Card> */}

export default User;
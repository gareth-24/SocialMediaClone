import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function Tweet(props) {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Card.Title>{props.user}</Card.Title>
          <Card.Text>
            <p>{props.status}</p>
            <p>{props.date}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
}

Tweet.propTypes = {
  user: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string
};

export default Tweet;
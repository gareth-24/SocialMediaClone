import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostTweet(){
  return (
    <React.Fragment>
      <Form.Label htmlFor="inputPassword5">Update Status</Form.Label>
      <Form.Control type="text" placeholder="what's happening?" />
      <p></p>
      <Button variant="primary">Post</Button>{' '}
    </React.Fragment>
  );
}

export default PostTweet;
import React from "react";
import Form from 'react-bootstrap/Form';

function PostTweet(){
  return (
    <React.Fragment>
      <Form.Control type="text" placeholder="what's happening?" />
    </React.Fragment>
  );
}

export default PostTweet;
import React from "react";
import TweetList from "./TweetList";
import { Container, Row, Col } from "react-bootstrap";
import PostTweet from "./PostTweet";
import Bio from "./Bio";
import SuggestedUsers from "./SuggestedUsers";

function Body(){
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Bio />
        </Col>

        <Col>
          <PostTweet />
          <TweetList />
        </Col>

        <Col>
          <SuggestedUsers />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Body;
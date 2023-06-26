import React from "react";
import TweetList from "./TweetList";
import { Container, Row, Col } from "react-bootstrap";
import PostTweet from "./PostTweet";
import Bio from "./Bio";
import SuggestedUsers from "./SuggestedUsers";
import AboutMe from "./AboutMe";

function Body(){
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Bio />
          <br />
          <AboutMe />
        </Col>

        <Col xs={5}>
          <PostTweet />
          <TweetList />
        </Col>

        <Col>
          <h5>Suggested Users</h5>
          <SuggestedUsers />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Body;
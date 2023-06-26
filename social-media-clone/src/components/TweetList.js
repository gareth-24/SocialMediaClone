import React from "react";
import Tweet from "./Tweet";

const mainTweetList = [
  {
    user: 'Jim',
    status: 'Elon Musk sucks'
  },
  {
    user: 'Sarah',
    status: 'I like turtles'
  }
];

function TweetList() {
  return (
    <React.Fragment>
      <hr/>
      {mainTweetList.map((tweet, index) =>
        <Tweet user={tweet.user}
          status={tweet.status}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default TweetList;
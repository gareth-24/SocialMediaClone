import React from "react";
import Tweet from "./Tweet";

const mainTweetList = [
  {
    user: 'Jim',
    status: 'Elon Musk sucks',
    date: 'June 26'
  },
  {
    user: 'Sarah',
    status: 'I like turtles',
    date: 'June 25'
  },
  {
    user: 'Gandalf',
    status: 'Wait a second... this isn\'t Twitter.',
    date: 'June 23'
  }
];

function TweetList() {
  return (
    <React.Fragment>
      <hr/>
      {mainTweetList.map((tweet, index) =>
        <Tweet user={tweet.user}
          status={tweet.status}
          date={tweet.date}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default TweetList;
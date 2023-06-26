import React from 'react';
import Card from 'react-bootstrap/Card';
import User from './User';

const mainUserList = [
  {
    name: 'Sarah',
    tagline: 'Turtle ally',
  },
  {
    name: 'Gandalf',
    tagline: 'Formerly Gandalf the Grey'
  }
];

function SuggestedUsers(){
  return (
    <React.Fragment>
      {mainUserList.map((user, index) => 
        <User names={user.name}
          tagline={user.tagline}
          key={index}/>
      )}
    </React.Fragment>
  );
}

{/* <Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>User1</Card.Title>
  <Card.Text>
    <p></p>
  </Card.Text>
</Card.Body>
</Card> */}

export default SuggestedUsers;
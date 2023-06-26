import React from "react";

function Navbar(){
  return (
    <React.Fragment>
      <menu>
        <button id="home">Home</button>
        <button id="notifications">Notifications</button>
        <button id="messages">Messages</button>
      </menu>
    </React.Fragment>
  );
}

export default Navbar;
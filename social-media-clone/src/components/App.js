import React from "react";
import Navbar from "./Header";
import Body from "./Body";
import { Container, Row, Col } from "react-bootstrap";


function App(){
  return ( 
    <React.Fragment>
      <Container fluid>
        <Navbar />
        <Body />
      </Container>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import Row from "../components/Row";
import Card from "../components/Card";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Container from "../components/Container";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container><br/><br/>
      <Row>
        <Col size='md-4'><Card/></Col>
        <Col size='md-4'><Card1/></Col>
        <Col size='md-4'><Card2/></Col>
      </Row>
      <br/>
      <Row>
        <Col size='md-4'><Card3/></Col>
        <Col size='md-4'><Card4/></Col>
        <Col size='md-4'><Card5/></Col>
      </Row>
      </Container>
    </div>
  );
}

export default About;

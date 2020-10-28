import React from "react";
import Row from "../components/Row";
import Card from "../components/Card";
import Container from "../components/Container";
import Col from "../components/Col";
import cardData from "../utils/cardData";

function About() {
  return (
    <div>
      <Container><br/><br/>
      <Row>
        {cardData.map(card => <Col size='md-4'><Card {...card}/></Col>)}
      </Row>
      </Container>
    </div>
  );
}

export default About;

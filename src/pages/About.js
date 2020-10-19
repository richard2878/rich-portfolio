import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
 
 
function About() {
  return (
    <div style={{
      justifyContent: 'center',
      dislay: 'flex',
      alignItems: 'center'
      }}>
      <Hero backgroundImage="https://github.com/richard2878/Richar-A-Portfolio/blob/main/src/images/Hero%20Image.jpg?raw=true">
      
        <Row>
          <Container>
            <Col size="md4">
              <h4 style={{color:'#DEB841', marginTop:'20px'}}>Languages</h4>
            <span style={{color:'white'}}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>REACT</li>
              <li>NodeJS</li>
            </span>
            </Col>
            <Col size="md4">
              <h4 style={{color:'#DEB841'}}>Design Tools</h4>
            <span style={{color:'white'}}>
              <li>ADOBE CREATIVE SUITE</li>
              <li>GOOGLE FONTS</li>
              <li>MATERIAL UI</li>
              <li>BOOTSTRAP</li>
              <li>FIGMA</li>
            </span>
            </Col>
            <Col size="md4">
              <h4 style={{color:'#DEB841'}}>Other Tools</h4>
            <span style={{color:'white'}}>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>HEROKU</li>
              <li>NodeJS</li>
              <li>VISUAL STUDIO CODE</li>
            </span>
            </Col>
          </Container>
        </Row>
        
      </Hero>
     
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12" >
            <h1 style={{color:'37323e'}}>Welcome to my portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12" flex='1'>
            <p style={{color:'37323e'}}>
              My name is Richard Antolin. I am a designer with an background in architecture.  I have learned early on that tools must feel comfortable and easy to use. 
              Otherwise, users will find other tools that will make the job easier to perform.  As a designer, I have the responsibilty to provide products that are ageless and long-lasting. Whether that is through
              the apps I've built or the buildings that I have designed, the result should always be that "Form follows Function."  
              It took a while but I finally decided that I will pursue my second career as a Full Stack Developer/UX Engineer. I have completed a web development course at
              UCLA. I gained knowledge and learned to love the technicalities of web development. I always knew that I can mix my background in design with building web applications as I have always been interested in figuring out how to make the web experience be more functional and enjoyable.
              Please click on my portfolio and see some of the apps I have built through my journey as a coder.  Thanks for visiting.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

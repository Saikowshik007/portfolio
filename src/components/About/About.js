import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import wonderImg from "../../Assets/wonder.gif";
import Stack from "./stack"
function About() {
  return (
  <Container>
        <Particle />
        <Container fluid className= "achieve-section">
          <Row style={{ justifyContent: "center", padding: "20px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "1px",
                paddingBottom: "80px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "1px" }}>
                <strong className="white">Sai's </strong>  <strong className="purple">Achievements 🏆</strong>
              </h1>
              <Stack/>
            </Col>

            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={wonderImg} alt="about" className="img-fluid" style={{ paddingTop: "120px", paddingBottom: "50px", paddingLeft:"60px"}} />


            </Col>

          </Row>

      </Container>



    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "1px",
              paddingBottom: "80px",
            }}
          >
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "12px", paddingBottom: "50px" }}
            className="about-img"
          >

           <img src={laptopImg} alt="about" className="img-fluid" style={{ paddingTop: "120px", paddingBottom: "50px" }}/>

          </Col>

        </Row>
        <Github />
      </Container>
    </Container>
    </Container>
  );
}

export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import wonderImg from "../../Assets/wonder.gif";

function About() {
  return (
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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "1px" }}>
              Sai's  <strong className="purple">Achievements 🏆</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ paddingTop: "120px", paddingBottom: "50px" }} />

           <img src={wonderImg} alt="about" className="img-fluid" style={{ paddingTop: "120px", paddingBottom: "50px" }}/>

          </Col>

        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/emoji.gif";
import Tilt from "react-parallax-tilt";
import About from "../About/About"
import Contact from "../Contact"



function Home2() {
  return (
  <section>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Bit <span className="purple"> About  </span> Me
            </h1>
            <p className="home-about-body">
              Welcome to the world of software innovation and engineering excellence!
              <br />
              <br /> Discover the cutting-edge creations of Sai Kowshik Ananthula, an experienced Software Engineer and Research Assistant with a passion for developing extraordinary applications.
              <br />From <b className="purple">Java, Python, Spring Boot </b> and <b className="purple">React.js</b> to <b className="purple"> AWS, Airflow, Flutter </b> and <b className="purple">MongoDB</b>, delve into a realm of expertise that spans diverse technologies and <b className="purple">design patterns</b>.
              <br />
              <br></br>
               Unravel the journey of a <b className= "purple"> Master of Computer Science</b> graduate, whose projects and papers have redefined the boundaries of possibilities in the digital era.
              <br />
              <br />
              Embark on a journey through Sai's impressive experience, where every line of code has fueled groundbreaking innovations, from enhancing automobile safety with IoT sensors to devising optimal solutions for multi-storey parking lots, and revolutionizing database performance with ingenious algorithms.
            <br/><br/>
            Navigate the intriguing intersection of technology and ingenuity. Through a blend of proven software engineering expertise and innovative solutions, I am reshaping the contours of transaction efficiency, cloud computing, and safety technology. The voyage of discovery begins here.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
            <About/>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
<Contact/>

          </Col>
        </Row>
      </Container>
    </Container>
</section>
  );
}
export default Home2;

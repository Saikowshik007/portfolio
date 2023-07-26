import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import { Col, Row , Container} from "react-bootstrap";
import Languages from "../About/Skills/Languages";
import Frameworks from "../About/Skills/Frameworks";
import Tools from "../About/Skills/Tools";
import DevelopmentSkills from  "../About/Skills/DevelopmentSkills";
import problem_solving_basic  from "../../Assets/Certificates/problem_solving_basic.jpg"
import java_basic  from "../../Assets/Certificates/java_basic.jpg"
import java_intermediate  from "../../Assets/Certificates/java_intermediate.jpg"
import python_basic  from "../../Assets/Certificates/python_basic.jpg"
import cpp  from "../../Assets/Certificates/C++.jpg"
import deep  from "../../Assets/Certificates/Deep.jpg"
import ml  from "../../Assets/Certificates/ml.jpg"
import android  from "../../Assets/Certificates/anroid.jpg"
import python  from "../../Assets/Certificates/python.jpg"
import social  from "../../Assets/Certificates/social.jpg"
import research  from "../../Assets/Certificates/research.jpg"
import cloud  from "../../Assets/Certificates/cloud.jpg"

import problem_solving_intermediate  from "../../Assets/Certificates/problem_solving_intermediate.jpg"

import Particle from "../Particle";
function Certificates() {
  return (

  <Container fluid className="about-section">
          <Particle />
     <Container>
      <h6 className="project-heading"><strong className="purple">Certifications </strong></h6>
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
 <strong className="purple">Specializations </strong>
                <Col xs={4} md={2} className="certificate-icons">
                   <img src={python} alt="about" className="img-fluid"  />
                   </Col>
           <Col xs={4} md={2} className="certificate-icons">
              <img src={android} alt="about" className="img-fluid"  />
              </Col>

           <Col xs={4} md={2} className="certificate-icons">
              <img src={deep} alt="about" className="img-fluid"  />
              </Col>
           <Col xs={4} md={2} className="certificate-icons">
              <img src={ml} alt="about" className="img-fluid"  />
              </Col>

        </Row>
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <strong className="purple">Languages and Problem Solving </strong>
  <Col xs={4} md={2} className="certificate-icons">
<img src={problem_solving_basic} alt="about" className="img-fluid"  />
  </Col>
  <Col xs={4} md={2} className="certificate-icons">
  <img src={problem_solving_intermediate} alt="about" className="img-fluid"  />
  </Col>
      <Col xs={4} md={2} className="certificate-icons">
         <img src={java_basic} alt="about" className="img-fluid"  />
         </Col>
      <Col xs={4} md={2} className="certificate-icons">
         <img src={java_intermediate} alt="about" className="img-fluid"  />
         </Col>
      <Col xs={4} md={2} className="certificate-icons">
         <img src={cpp} alt="about" className="img-fluid"  />
         </Col>
      <Col xs={4} md={2} className="certificate-icons">
         <img src={cloud} alt="about" className="img-fluid"  />
         </Col>
  </Row>

       <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <strong className="purple">Social and Behavioural </strong>
    <Col xs={4} md={2} className="certificate-icons">
  <img src={social} alt="about" className="img-fluid"  />
    </Col>
    <Col xs={4} md={2} className="certificate-icons">
    <img src={research} alt="about" className="img-fluid"  />
    </Col>
    </Row>

      </Container>
      </Container>



  );
  }
  export default Certificates
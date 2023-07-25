import React from "react";
import { Col, Row , Container} from "react-bootstrap";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiSpringboot,
  SiFlutter,
  SiReact,
  SiApacheairflow,
  SiAndroid
} from "react-icons/si";
function Frameworks(){
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot />
            <h4>Spring Framework</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFlutter />
            <h4>Flutter</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiReact />
            <h4>React</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiApacheairflow />
            <h4>Apache Airflow</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAndroid />
            <h4>Android</h4>
        </Col>

    </Row>);
}

export default Frameworks;
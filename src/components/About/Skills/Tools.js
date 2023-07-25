import React from "react";
import { Col, Row , Container} from "react-bootstrap";
import {
  SiGithub,
  SiDocker,
  SiAmazonaws,
  SiJenkins,
  SiGradle,
  SiJson,
  SiMysql,
  SiJira,
  SiApacheairflow,
  SiAndroid
} from "react-icons/si";
function Tools(){
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
            <h4>Github</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDocker />
            <h4>Docker</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws />
            <h4>AWS</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJenkins />
            <h4>Jenkins</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGradle />
            <h4>Gradle</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJson />
            <h4>Json</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
            <h4>Mysql</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJira />
            <h4>Jira</h4>
        </Col>

    </Row>);
}

export default Tools;
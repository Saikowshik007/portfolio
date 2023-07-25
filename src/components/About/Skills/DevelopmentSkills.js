import React from "react";
import { Col, Row , Container} from "react-bootstrap";
import {
  SiGamedeveloper,
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

import {
  DiScrum,
} from "react-icons/di";
function Tools(){
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiScrum />
            <h4>Scrum</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGamedeveloper />
            <h4>CI/CD</h4>
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
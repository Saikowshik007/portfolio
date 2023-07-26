import React from "react";
import { Col, Row , Container} from "react-bootstrap";
import { GiBeaver } from "react-icons/gi"
import {
  SiGamedeveloper,
  SiDocker,
  SiAmazonaws,
  SiJenkins,
  SiGradle,
  SiJson,
  SiMysql,
  SiJira,
  SiJunit5,
  SiAndroid,
  SiPostman,
  SiIntellijidea
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
            <SiIntellijidea />
            <h4>Intellij</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <GiBeaver />
            <h4>DBeaver</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
            <h4>Postman</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJunit5 />
            <h4>JUnits</h4>
        </Col>

    </Row>);
}

export default Tools;
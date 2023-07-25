import React from "react";
import { Col, Row , Container} from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { AiOutlineHtml5 } from "react-icons/ai"
import{ GiDart } from "react-icons/gi"
import { DiCss3 } from  "react-icons/di"
import {BsFiletypeXml } from  "react-icons/bs"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
function Languages(){
return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h4>Java</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
         <h4>Python</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      <h4>JavaScript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
               <SiPostgresql />
               <h4>SQL</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h4>C++</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
        <h4>HTML5</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiDart />
        <h4>Dart</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h4>CSS3</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeXml />
        <h4>XML</h4>
      </Col>
    </Row>);
}

export default Languages;
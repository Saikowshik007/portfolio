import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Type from "./Type";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-1">
          <p style={{ textAlign: "justify", fontSize:15}}/>
Spearheaded the implementation of Airflow DAGs, Kubernetes, and Docker, resulting in a remarkable 30% efficiency improvement in client transaction pipelines at Global Payments Inc.
<p style={{ textAlign: "justify", fontSize:15}}/>
Published an IEEE paper on visual light communication, generating significant revenue for M.O.R.S.E studio development during the tenure as a Graduate Software Engineer at Georgia State University.
<p style={{ textAlign: "justify", fontSize:15}}/>
Developed a cross-platform mobile and web application, GSU ThingsBoard, optimizing radon gas data collection by 70% across the GSU Network.
<p style={{ textAlign: "justify", fontSize:15}}/>
Designed and implemented an algorithm for collision detection, outperforming existing models and enhancing automobile safety using Python, JavaScript, SQL, and Java.
<p style={{ textAlign: "justify", fontSize:15}}/>
Reduced database hits by 60% through the development of an innovative algorithm combining Redis cache with MongoDB and PostgreSQL.
<p style={{ textAlign: "justify", fontSize:15}}/>
Devised a multi-storey parking lot system simulation, suggesting optimal traffic organization methods, and reducing wait times by 40%.
<p style={{ textAlign: "justify", fontSize:15}}/>
Successfully automated assignment management with a Python script, reducing evaluation time by an impressive 95% using REST API.
<p style={{ textAlign: "justify", fontSize:15}}/>
Demonstrated expertise in Agile methodologies, Scrum, Test-driven development (TDD), CI/CD, and various design patterns like MVC, Singleton, Factory, and Observer.
<p style={{ textAlign: "justify", fontSize:15}}/>
Graduated with a Master of Computer Science degree from Georgia State University with a stellar GPA of 3.9, reflecting a commitment to academic excellence.
<p style={{ textAlign: "justify", fontSize:15}}/>
Earned a Bachelor of Computer Science degree from GITAM University with an outstanding GPA of 3.9, showcasing consistent academic achievements.

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
<br/>

<h1 style={{ fontSize: "1.5em", paddingBottom: "1px" }}>
                   I <strong className="purple">Believe</strong> in
                 </h1>
          <p style={{ color: "rgb(155 126 172)" , fontSize:10}}>
          <Type/>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

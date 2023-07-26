import React from "react";
import {StackCard} from "react-stack-cards";
import Card from "react-bootstrap/card";
import { ImPointRight } from "react-icons/im";
import Type from "./Type";
import Stack from "./stack"
function AboutCard() {
  return (
    <Card className="quote-card-view">

      <Card.Body>
      <Stack/>
      <br/><br/>
        <blockquote className="blockquote mb-1">
<h5 style={{ fontSize: "1.5em", paddingBottom: "1px" }}>
                   I <strong className="purple">Volunteered</strong> in
                 </h5>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching Python in Georgia State University
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">National Service Scheme</strong> by conducting blood donation camps, improving awareness in citizens about cancers, cleanliness and environment.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">Computer Society of India</strong> by conducting tech fests impacting over 3000 undergraduate students.
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

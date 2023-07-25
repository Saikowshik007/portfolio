import React from "react";
import { Col, Row , Container} from "react-bootstrap";
import Languages from "./Skills/Languages";
import Frameworks from "./Skills/Frameworks";
import Tools from "./Skills/Tools";
import DevelopmentSkills from  "./Skills/DevelopmentSkills";

import Particle from "../Particle";
function Techstack() {
  return (
      <Container fluid className="about-section">
        <Particle />
   <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
<br/>
          <h3 className="project-heading">
                       <strong className="purple">Languages </strong> I'm proficient in
          </h3>
<Languages/>

<h3 className="project-heading">
                       <strong className="purple">Frameworks </strong> I'm skilled in
          </h3>
<Frameworks/>

            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            <Tools/>

            <h3 className="project-heading">
                                   <strong className="purple">Development Skills </strong> I utilize daily
                      </h3>
            <DevelopmentSkills/>
    </Container>
    </Container>


  );
}

export default Techstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import parkade from "../../Assets/Projects/parkade.jpg";
import things from "../../Assets/Projects/transparent-things.jpg";
import AiJob from "../../Assets/Projects/AiJob.jpg";
import earthquake from "../../Assets/Projects/earthquake.jpg";
import deep from "../../Assets/Projects/deep.jpg";
import blood from "../../Assets/Projects/main.jpg";
import data from "../../Assets/Projects/data.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Academic <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Some projects that I am proud to showcase myself.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={things}
              isBlog={false}
              title="GSU ThingsBoard"
              description="
                           This project designs the GSU Thingsboard app which is meant to
                           control, visualize, and collect data from multiple IoT sensors. It
                           provides users with information about how their sensors are
                           performing, the scenarios in which the sensors are producing desired
                           data, any red flags such as device failures, and the activity status of
                           devices all over the internet. This project also provides detailed
                           documentation and tutorial videos for setting up the Thingsboard
                           environment and running experiments with collecting data from IoT
                           sensors and/or devices."
              ghLink="https://github.com/ashwinashok/gsuthingsboard"
              demoLink="https://youtu.be/osHMsH1yozM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkade}
              isBlog={false}
              title="Parkade"
              description="Managing a parking lot is a complicated system that involves tasks such as reserving a
                           parking spot, managing vehicles depending on their size, giving fast service to vehicles,
                           charging the appropriate amount, and so on. As a result, having a well-organized system
                           that keeps track of parking spots and properly distributes them based on vehicle size is
                           crucial. It is also necessary to guarantee that all available resources are used in accordance
                           with request priorities, and that the vehicle is paid efficiently based on the parking space
                           used, with no resources staying occupied for longer than the system lot allocation allows.
                           Also, efficiently allocate and reuse the finite space for parking lot with multiple stories,
                           organize and provide the respective slots to the oncoming customers. "
              ghLink="https://github.com/Saikowshik007/AdvanceSoftwareEngineering"
              demoLink="https://github.com/Saikowshik007/AdvanceSoftwareEngineering/blob/main/Hands%20on%20project%20report.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AiJob}
              isBlog={false}
              title="AI Job Predictor"
              description="It is hard to identify a suitable job for a student or a job-seeker who requires jobs based
                           on their skill set; it is also hard for employers to find a way to select candidates that best suits the job
                           they require. In this project, we mainly focus on predicting the jobs utilizing deep neural networks,
                           which includes CNN and machine learning algorithms like Logistic Regression with various word
                           embeddings on IT datasets pre-trained. Also, we thought of a simple yet effective model by CNN. Our
                           experimental results illustrated that our proposed CNN model achieved the highest result with an F1-
                           score of 92.5%. Additionally, we scrutinize these results to discover better solutions in the future."
              ghLink="https://github.com/Saikowshik007/AI_Job_Predictor"
              demoLink="https://youtu.be/BbRpgDzgcj0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={earthquake}
              isBlog={false}
              title="Earthquake Damage Predicton"
              description="The massive scale of destruction caused by the Gorkha Earthquake in Nepal in April 2015 led to the
                           necessity to assess the scale of damage of post-earthquake structures. Having one of the enormous postdisaster datasets, the task is to develop a model to predict the grade of damage caused on a building postearthquake. The degree of destruction should be classified as follows: 1 represents low damage, 2
                           represents moderately damaged, and 3 represents massive destruction."
              ghLink="https://github.com/Saikowshik007/Earthquake-Damage-Prediction"
              demoLink="https://github.com/Saikowshik007/Earthquake-Damage-Prediction/blob/main/Valorants_final_report.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood}
              isBlog={false}
              title="Location based blood donor search App"
              description="The main idea is to help people who requires blood in panic situations without doing unnecessary steps. First the user will register in the app and then he will find people who are donors in his locality based on their blood groups. The data of the app is planned to store in firebase and retrieved from it during starting of the app.
                           A location service is provided which checks periodically current location of the user to suggest the donors. Threads are used to fetch location and data to omit the freeze of UI. Validations are performed using regex. A recycler view Is used to show the fetched data from database in a list view format. "
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//              demoLink ="https://youtu.be/BbRpgDzgcj0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deep}
              isBlog={false}
              title="Face Recognizer"
              description="Face recognition system collects distinct features of the face and converts them into mathematical data, and then it compares with existing trained data in a vast database. When the data is significantly less, the process of learning good features for machine learning becomes computationally expensive and difficult.
                           We have tried to incorporate a facial recognition system that uses a one-shot metric approach to generalize unrecognized categories without large datasets. Unlike other commonly used neural network architectures, which only learn to classify input using the classification loss functions, then the model learns to differentiate between the two inputs.
                            In this work, We use Siamese architecture, a one-shot learning algorithm, i.e. it can learn to recognize any face using just a single training sample."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://github.com/Saikowshik007/Face-Recognizer/blob/main/final%20ppt.pptx"
            />
          </Col>

                    <Col md={4} className="project-card">
                      <ProjectCard
                        imgPath={data}
                        isBlog={false}
                        title="DB Optimizer"
                        description="Yet to be written"
                       ghLink="https://google.com"
                        demoLink="https://youtu.be/7fk4dAYg3pA"
                      />
                    </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

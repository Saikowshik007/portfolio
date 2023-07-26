import { ToggleCard, TinderLikeCard, StackCard } from 'react-stack-cards'
import React from "react";
class Stack extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      directionTinder: "swipeCornerDownRight",
      directionToggle: "sideSlide",
      directionStack: "topRight",
      isOpen: false
    }
    this.Tinder = null
  }

  onTinderSwipe() {
    this.Tinder.swipe()
  }

  render() {
    const arr=[
    "Spearheaded the implementation of Airflow DAGs, Kubernetes, and Docker, resulting in a remarkable 30% efficiency improvement in client transaction pipelines at Global Payments Inc.",
    "Published an IEEE paper on visual light communication, generating significant revenue for M.O.R.S.E studio development during the tenure as a Graduate Software Engineer at Georgia State University.",
    "Developed a cross-platform mobile and web application, GSU ThingsBoard, optimizing radon gas data collection by 70% across the GSU Network.",
    "Designed and implemented an algorithm for collision detection, outperforming existing models and enhancing automobile safety using Python, JavaScript, SQL, and Java.",
    "Reduced database hits by 60% through the development of an innovative algorithm combining Redis cache with MongoDB and PostgreSQL.",
    "Devised a multi-storey parking lot system simulation, suggesting optimal traffic organization methods, and reducing wait times by 40%.",
    "Successfully automated assignment management with a Python script, reducing evaluation time by an impressive 95% using REST API.",
    "Demonstrated expertise in Agile methodologies, Scrum, Test-driven development (TDD), CI/CD, and various design patterns like MVC, Singleton, Factory, and Observer.",
    "Graduated with a Master of Computer Science degree from Georgia State University with a stellar GPA of 3.9, reflecting a commitment to academic excellence.",
    "Earned a Bachelor of Computer Science degree from GITAM University with an outstanding GPA of 3.9, showcasing consistent academic achievements."



    ]
    return (
      <div>
        <TinderLikeCard
            images={arr}
            width="700"
            height="500"
            direction={this.state.directionTinder}
            duration={400}
            ref={(node) => this.Tinder = node}
            className="cards"
        >
            { arr.map( (i,index) =>
            <div key={index} className="card-container">
                 <div className="content-card">{i}</div>
               </div>


            )}
        </TinderLikeCard>
        <br/><br/>
        <button class="button button-a button-big button-rouded" onClick={this.onTinderSwipe.bind(this)}>Next Achievement </button>

      </div>
    );
  }
}

export default Stack;
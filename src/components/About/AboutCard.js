import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">S.P Acharya </span>
            from <span className="purple"> Odisha, India.</span>
            <br /> 
            As a Web Developer and Mentor with a strong command of the MERN stack, I bring a proven track record of delivering results through my passion for learning and innovation. With a can-do attitude and a dedication to self-motivation, I thrive in dynamic, rapidly-changing environments. My extensive project portfolio encompasses cutting-edge technologies such as React, JavaScript, CSS, machine learning, and NLP. My ability to excel in multitasking, coupled with a commitment to delivering projects ahead of schedule, has consistently set me apart. I'm a fast learner with an unwavering enthusiasm for staying at the forefront of the tech industry. Let's connect and explore how my skills and expertise can contribute to your team's success."ork even under dynamic, rapid-moving situations.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Mythology seris
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Balancing the lines of code with the lines of life, where every bug is a new opportunity to debug existence."{" "}
          </p>
          <footer className="blockquote-footer">SP_Acharya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

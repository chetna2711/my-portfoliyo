import React from "react";
import myImage from "../../public/images/my-photoes/chetuCollage.jpeg";
import { skills } from "../data/skills";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={myImage} alt="chetu photo" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <h3>Frontend Developer</h3>
          <p>
            Hi, I’m Chetna Kanak, a passionate and creative developer dedicated
            to building clean, responsive, and user-friendly websites. This
            portfolio showcases some of my best work, including personal
            projects. I specialize in some skills, like HTML, CSS, JavaScript,
            React, and I’m always eager to learn new technologies and take on
            exciting challenges.
          </p>
          <div className="about-skills">
            {skills.map((skill) => (
              <span>{skill.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

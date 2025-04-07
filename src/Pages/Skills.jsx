import React from "react";
import { skills } from "../data/skills";

function Skills() {
  console.log(skills);
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <i className={skill.icon}></i>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

import React from "react";
import "./style.css";

const Resume = ({ skills, resume }) => {
  /* ----------------- Map Skills to list of items ----------------- */
  const mappedSkills = skills.skillProficiency.map(function (skills) {
    var className = "bar-expand " + skills.name.toLowerCase();
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <div className="resume-items">
        <div className="resume-item">
          <div className="resume-item-title">
            <h1>Work</h1>
          </div>
          <div>
            {resume.map((item) => (
              <div key={item.company} className="resume-item-main-col">
                <h3>{item.company}</h3>
                <div className="light-para">
                  <p>
                    <i>{item.title}&nbsp;&nbsp; </i> |&nbsp;&nbsp; {item.time}
                  </p>
                </div>
                <div className="light-para">{item.introduction}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="resume-item">
          <div className="resume-item-title">
            <h1>Skills </h1>
          </div>
          <div className="resume-item-main-col">
            <div className="light-para">
              <p>{mappedSkills.intro}</p>
            </div>
            <div className="bars">
              <div>
                <ul className="skills">
                  {mappedSkills.slice(0, skills.skillProficiency.length / 2)}
                </ul>
              </div>
              <div>
                <ul className="skills">{mappedSkills.slice(skills.skillProficiency.length / 2)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

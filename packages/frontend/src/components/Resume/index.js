import React from "react";
import "./style.css";
import "assets/images/gs.svg";
import "assets/images/netapp.svg";
import "assets/images/wipro.svg";
import "assets/images/ts-logo.svg";

const Resume = ({ skills, resume }) => {
  /* ----------------- Map Skills to list of items ----------------- */
  const mappedSkills = skills.skillProficiency.map(function (skills) {
    return (
      <div className="card">
         <i className={skills.logo}></i>
        <h4 class="text-md ml-3">{skills.name}</h4>
      </div>
    );
  });

  return (
    <section id="resume">
      <div className="resume-items">
        <div className="resume-item-title">
          <h1>Work</h1>
        </div>
        {/* <div className="resume-item"> */}
        <div>
          {resume.map((item) => (
            <div className="resume-item" key={item.company}>
              <div className="resume-logo-div">
                <img className="resume-logo" src={item.logo} alt={item.company}></img>
              </div>
              <div key={item.company} className="resume-item-main-col">
                <h3>{item.company}</h3>
                <div className="light-para">
                  <p>
                    <span>{item.title}&nbsp;&nbsp; </span> |&nbsp;&nbsp; 
                    <span>{item.time}</span>
                  </p>
                </div>
                <div className="light-para">{item.introduction}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="resume-item-title">
          <h1>Skills </h1>
        </div>
        <div className="resume-item-main-col">
          <div className="light-para">
            <p>{mappedSkills.intro}</p>
          </div>
          <div className="skills-block">
              {mappedSkills}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

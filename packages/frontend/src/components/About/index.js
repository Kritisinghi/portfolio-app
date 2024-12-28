import React from "react";
import profile from "assets/images/profile.png";
import resume from "assets/kriticv.pdf";

import "./style.css";
const About = ({ data }) => {
  return (
    <section id="about">
      <div className="about-row">
        <div className="avatar-column">
          <img className="profile-image" src={profile} alt="KRS" />
        </div>
        <div className="about-column">
          <div className="description-block">
            <h3>About Me</h3>
            <p>{data.mainIntro}</p>
            <p>{data.secondaryIntro}</p>
            <p>{data.moreIntro}</p>
          </div>
          {/* <div className="contact-details-block">
            <div>
              <h4>Contact</h4>
              <p className="">
                <span>{data.contact.name}</span>
                <br />
                <span>
                  {data.contact.location}
                  <br />
                </span>
                <span>{data.contact.phone}</span>
                <br />
                <span>{data.contact.email}</span>
              </p>
            </div>
            <div>
              <Button
                className="button is-primary is-filled"
                text="Download Resume"
                onClick={resumeDownload}
                icon="fa fa-download"
              ></Button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default About;

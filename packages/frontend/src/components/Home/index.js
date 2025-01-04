import React from "react";
import Typewriter from "typewriter-effect";
import Button from "components/Button";
import resume from "assets/kriticv.pdf";
import "./style.css";

const Home = () => {
  const resumeDownload = () => {
    window.open(resume, "_blank");
  };

  return (
    <section id="home">
      <div className="banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <Typewriter
              options={{
                strings: [`I'm Kriti Raj Singhi.`],
                autoStart: true,
                pauseFor: "100000000",
              }}
            />
          </h1>
          <h3>
            Senior Software Engineer@Goldman Sachs<span> based in Birmingham, UK.</span> <br />I
            Design, Build &amp; Deploy Fast, Responsive Dynamic Web App&apos;s .
          </h3>
          <hr />
          <div className="resume-dwnld-block">
            <Button className="button is-primary is-filled"
                    text="Resume"
                    onClick={resumeDownload}
                    icon="fa fa-download"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

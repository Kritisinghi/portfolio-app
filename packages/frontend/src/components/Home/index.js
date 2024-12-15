import React from "react";
import Typewriter from "typewriter-effect";

import "./style.css";

const Home = () => {
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
            Full Stack Developer @ Goldman Sachs.<span> Based in Birmingham, UK.</span> <br />I
            Design, Build &amp; Deploy Fast, Responsive, Intuitive, Dynamic Web App&apos;s .
          </h3>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Home;

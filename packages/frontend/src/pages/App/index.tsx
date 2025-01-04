import React, { useState, useRef, useEffect } from "react";

import logo from "assets/images/logo.png";
import Navbar from "components/Navbar";
import Home from "components/Home";
import SideDrawer from "components/SideDrawer";
import About from "components/About";
import Resume from "components/Resume";
import Footer from "components/Footer";
import Contact from "components/Contact";
import { Data } from "./index.types";
import portfolioContent from "content/data.json";


const App: React.FC = () => {
  const [sideToggle, setSideToggle] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const data: Data = portfolioContent;
 
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setSideToggle(false)
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="portfolio-app">
      <div ref={menuRef}>
        <Navbar
          click={() => setSideToggle(!sideToggle)}
          logo={logo}
          logoAlt="KRS"
          menuItem="Contact Me"
          data={data.nav} />
        <SideDrawer
          show={sideToggle}
          data={data.nav}
          onClick={() => setSideToggle(!sideToggle)} />
      </div>
      <Home />
      <About data={data.about} />
      <Resume resume={data.resume} skills={data.skills} />
      <Contact data={data.contact} />
      <Footer data={data.footer} />
    </div>
  );
};

export default App;

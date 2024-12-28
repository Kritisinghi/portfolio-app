import React from "react";
import { Link } from "react-scroll";

import "./style.css";

const SideDrawer = ({ show, data, onClick }) => {
  const sideDrawerClass = ["sideDrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    show && (
      <div className={sideDrawerClass.join(" ")}>
        <ul className="sideDrawer-links">
          {data.menuItems.map((item, i) => (
            <li key={i} className={i == 0 ? "sideDrawer-text selected" : "sideDrawer-text"}>
              <Link
                className="nav-menu-item"
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default SideDrawer;

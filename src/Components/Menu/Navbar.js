import React, { useState } from "react";
import {
  AiOutlineClose,
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/all";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./style.css";
import { IconContext } from "react-icons";
import logo from "../../Assets/logo9.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fffff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
          <img
            src={logo}
            alt="dscuaf"
            style={{ width: "90px", height: "50px", marginLeft: "5%" }}
          />
          <h1 style={{ color: "white", marginLeft: "2%" }}>DSC UAF</h1>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-menu-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <h2 style={{ color: "white", marginTop: "100px" }}>Follow Us</h2>
            <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
              <li style={{ color: "white", height: "40px" }}>
                <span style={{ marginRight: "6%" }}>
                  <FaFacebookF />
                </span>
                Facebook
              </li>
              <li style={{ color: "white", height: "40px" }}>
                <span style={{ marginRight: "6%" }}>
                  <FaTwitter />
                </span>
                Twitter
              </li>
              <li style={{ color: "white", height: "40px" }}>
                <span style={{ marginRight: "6%" }}>
                  <FaInstagram />
                </span>
                Instagram
              </li>
            </ul>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

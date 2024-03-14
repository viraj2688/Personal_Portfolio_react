import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/NavbarStyle.css";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
      <div className="humburger" onClick={handleClick}>
        {clicked ? (
          <FaTimes size={30} style={{ color: "white" }}></FaTimes>
        ) : (
          <FaBars size={30} style={{ color: "white" }}></FaBars>
        )}
      </div>
    </div>
  );
}

export default Navbar;

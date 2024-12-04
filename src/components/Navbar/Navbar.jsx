import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isHomePage, isCulturaPage, isCulinariaPage }) => {
  const location = useLocation();

  return (
    <nav
      className={`navbar
        ${isHomePage ? "navbar-home" : ""} 
        ${isCulturaPage ? "navbar-cultura" : ""} 
        ${isCulinariaPage ? "navbar-culinaria" : ""}`}
    >
      <div className="navbar-container">
        <h1 className="navbar-title">MAUÉS Art & Cultura</h1>
        <button className="navbar-button">Saiba Mais</button>
        <ul className="navbar-menu">
          <li
            className={`navbar-item ${
              location.pathname === "/" ? "highlighted" : ""
            }`}
          >
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li
            className={`navbar-item ${
              location.pathname === "/cultura" ? "highlighted" : ""
            }`}
          >
            <Link to="/cultura" className="navbar-link">Cultura Típica</Link>
          </li>
          <li
            className={`navbar-item ${
              location.pathname === "/culinaria" ? "highlighted" : ""
            }`}
          >
            <Link to="/culinaria" className="navbar-link">Culinária</Link>
          </li>
          <li
            className={`navbar-item ${
              location.pathname === "/geografia" ? "highlighted" : ""
            }`}
          >
            <Link to="/geografia" className="navbar-link">Geografia</Link>
          </li>
          <li
            className={`navbar-item ${
              location.pathname === "/historia" ? "highlighted" : ""
            }`}
          >
            <Link to="/historia" className="navbar-link">História</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

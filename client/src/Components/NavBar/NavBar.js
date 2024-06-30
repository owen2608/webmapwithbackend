import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"; // Import the custom CSS file

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        position: "fixed", // Keeps the navbar fixed at the top of the viewport
        top: 0, // Aligns the navbar at the top of the viewport
        width: "100%", // Ensures the navbar spans the full width of the viewport
        zIndex: 1030, // High z-index to keep it above other page content
      }}
    >
      <a className="navbar-brand custom-margin-left" href="#">
        Addipar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>

      <button type="button" className="btn btn-danger custom-margin-right">
        Add Item
      </button>
    </nav>
  );
}

export default NavBar;

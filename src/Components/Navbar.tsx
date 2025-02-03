import React from 'react'

export const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Carl Jonsen</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
         
        </ul>
        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <a className="nav-link" href="https://www.instagram.com/carljonsenn/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/carl-jonsen-2b5873276/?originalSubdomain=se" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/CarlJonsen" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

import React from 'react'
import logo from '../images/logo.jpeg'
export default function Navbar() {
  return (
    <section id = "navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#top"><img src={logo} alt="" />Runtime AlgoRhythm</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <i className="fa fa-bars"></i>
  </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link " href="#top">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-us">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#meetourteam">Meet Our Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </section>
  );
}

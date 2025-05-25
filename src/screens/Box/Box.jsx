import React from "react";
import "./Boxstyle.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="box-header">
        <div className="logo">ANISH KUMAR SINHA</div>
        <div className="nav-links">
          <div className="nav-item">Home</div>
          <div className="nav-item active">About</div>
          <div className="nav-item">Resume</div>
          <div className="nav-item">Skills</div>
          <div className="nav-item">Projects</div>
          <div className="nav-item">Contact</div>
        </div>
      </div>
      
      <div className="content-area">
        <img
          className="about-light"
          alt="About light"
          src="https://c.animaapp.com/rxLFeoLW/img/about---light.svg"
        />
      </div>
    </div>
  );
};

import React, { Component } from "react";
import Logo from "../Intro/Logo";
import Headline from "../Intro/Headline";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="pattern">
      <div className="container">
        
        <Logo />
        <Headline headline={`boop`} />
        
      
      </div>
      </div>
    );
  }
}

export default About;

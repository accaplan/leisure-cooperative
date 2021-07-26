import React, { Component } from "react";

class About extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="aboutContent">
            <p>
            This is a directory for enjoying productive leisure. Compiled to share our resources, knowledge and time for the benefit of our community and nature.
            </p>
            <p>
            Remember the worker cooperative movement? It's a little like that. We need more space and networks to share and participate in conscious leisure activities. Part of a post-growth economy.
            </p>
            <p>
            📓 To submit a new entry, please answer <a href="https://forms.gle/5rwbdmCDipjwtBJY8" target="_blank">a few questions</a> to join our cooperative.
            </p>
            <p>
            A sister organization of regenerative placemakers.<br />
            <a href="https://idlehours.co" target="_blank">The Idle Hours Company</a><br />
            <a href="https://infiniteplaces.org" target="_blank">Infinite Places</a><br />
            <a href="https://enoughstructures.com.com" target="_blank">Enough Structures</a><br />
            <a href="mailto:info@infiniteplaces.org">E-mail us.</a>
            </p>

        </div>
        <div className="spacer"></div>
        </React.Fragment>
    );
  }
}

export default About;

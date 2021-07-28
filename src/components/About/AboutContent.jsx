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
            Join our Element chat <a href="https://https://matrix.to/#/#leisurecoop:matrix.org" target="_blank">LeisureTalk</a> on our decentralised communication network.
            </p>
            <p>
            We are a sister organization of like-minded regenerative placemakers.<br />
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

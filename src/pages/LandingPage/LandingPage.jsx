import React, { Component } from "react";
import "./LandingPage.css";
import Nav from "../../components/Nav/Nav";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Nav user={this.user} handleLogout={this.handleLogout} />
        <div class="container">
        <br/>
        <h2 class="center-align">My Compawdre</h2>
        <h6 class="center-align">A Dog Wellness App. <br/><br/> Sign up for free!</h6>
        <div id="woof" class="center-align"><img src="https://i.imgur.com/oUdVDJD.png" alt="pack" /></div>
        </div>
      </>
    );
  }
}

export default LandingPage;

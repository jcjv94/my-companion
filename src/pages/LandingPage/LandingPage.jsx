import React, { Component } from "react";
import "./LandingPage.css";
import Nav from "../../components/Nav/Nav";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Nav user={this.user} handleLogout={this.handleLogout} />
        <h1>My Compawdre</h1>
      </>
    );
  }
}

export default LandingPage;

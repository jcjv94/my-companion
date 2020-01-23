import React, { Component } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./SignupPage.css";
import Nav from "../../components/Nav/Nav";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <>
        <Nav user={this.user} handleLogout={this.handleLogout} />

        <div class="container">
          <div class="container">
            <SignupForm {...this.props} updateMessage={this.updateMessage} />
            <p>{this.state.message}</p>
          </div>
        </div>
      </>
    );
  }
}

export default SignupPage;

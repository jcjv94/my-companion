import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import Nav from '../../components/Nav/Nav';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/dashboard');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <>
      <Nav 
        user={this.user}
        handleLogout={this.handleLogout}
        />

      <div class="container">
        <div class="container">
        <h4 class="center-align">Log In</h4>
        <form onSubmit={this.handleSubmit} >
          <div>
            <div>
              <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div class="center-align">
              <button class="btn btn-default" >Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'class="btn btn-small red"><i class="material-icons">cancel</i></Link>
            </div>
          </div>
        </form>
        </div>
      </div>
      </>
    );
  }
}

export default LoginPage;

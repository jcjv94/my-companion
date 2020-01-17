import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Nav from '../../components/Nav/Nav';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';

class App extends Component {
  render() {
    return (
      <>
      <header>My Companion</header>
      <Switch>
        
      <Route exact path='/' render={() =>
            <Nav/>
      }/>
      <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

      </Switch>

      </>
    )
  }

}




// function App() {
//   return (
//     <div className="App">
  
//       <Home />
//     </div>
//   );
// }

export default App;

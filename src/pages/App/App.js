import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as dogAPI from '../../utils/dogs-api';
// import logo from './logo.svg';
import './App.css';
// import Nav from '../../components/Nav/Nav';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import Dashboard from '../Dashboard/Dashboard';


class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      dogs: [],
      user: userService.getUser()
    };
  }

  getInitialState() {
    return {
      dogs: 0,
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }
  
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddDog = async newDogData => {
    const newDog = await dogAPI.create(newDogData);
    this.setState(state => ({
      dogs: [...state.dogs, newDog]
    }),
    () => this.props.history.push('/'));
  }


  async componentDidMount() {
    const dogs = await dogAPI.getAll();
    this.setState({dogs});
  }


  render() {
    return (
      <>
      <header>
        My Companion
        <nav>
      test
        </nav>
      </header>
      <Switch>
        
      <Route exact path='/' render={() =>
        <Dashboard
        user={this.state.user}
        handleLogout={this.handleLogout}
        handleAddDog={this.handleAddDog}
         
        />
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

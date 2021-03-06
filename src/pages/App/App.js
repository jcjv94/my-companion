import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import * as dogAPI from '../../utils/dogs-api';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import Dashboard from '../Dashboard/Dashboard';
import EditDogPage from '../EditDogPage/EditDogPage';
import LandingPage from '../LandingPage/LandingPage';


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
    () => this.props.history.push('/dashboard'));
  }

  handleUpdateDog = async updatedDogData => {
    const updatedDog = await dogAPI.update(updatedDogData);
    const newDogsArray = this.state.dogs.map(p => 
      p._id === updatedDog._id ? updatedDog : p
    );
    this.setState(
      {dogs: newDogsArray},
      () => this.props.history.push('/dashboard')
    );
  }

  handleDeleteDog= async id => {
    await dogAPI.deleteOne(id);
    this.setState(state => ({
      dogs: state.dogs.filter(p => p._id !== id)
    }), () => this.props.history.push('/dashboard'));
  }


  async componentDidMount() {
    const dogs = await dogAPI.getAll();
    this.setState({dogs});
  }


  render() {
    return (
      <>
      <Switch>
      <Route exact path='/' render={() => 
        <LandingPage />  
      }/>

      <Route exact path='/dashboard' render={() =>
        <Dashboard
        user={this.state.user}
        dogs={this.state.dogs}
        handleLogout={this.handleLogout}
        handleAddDog={this.handleAddDog}
        handleDeleteDog={this.handleDeleteDog}
        handleUpdateDog={this.handleUpdateDog}
         
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
      <Route exact path='/edit' render={({ location }) => 
            <EditDogPage
            handleUpdateDog={this.handleUpdateDog}
            location={location}
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

export default withRouter(App);

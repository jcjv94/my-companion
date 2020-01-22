import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './Dashboard.css';
import AddDogPage from '../AddDogPage/AddDogPage';
import DogGroup from '../../components/DogGroup/DogGroup';
import { Route, Switch } from 'react-router-dom';

const Dashboard = (props) => {
    return (
        <>
        <Nav 
        user={props.user}
        handleLogout={props.handleLogout}
        />

    <Switch>/

        <Route exact path='/dashboard/AddDogPage' render={({ history }) =>
            <AddDogPage 
            history={history}
            handleAddDog={props.handleAddDog}
            />
        }/>

        <Route exact path='/dashboard/DogGroup' render={({ history }) =>
            <DogGroup
            dogs = {props.dogs}
            history={history}
            handleDeleteDog={props.handleDeleteDog}
            />
         }/>

    </Switch>

        <footer className='header-footer'>
       footer
      </footer>
        </>
    );
};



export default Dashboard;
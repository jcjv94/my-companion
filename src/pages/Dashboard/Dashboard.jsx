import React from 'react';
import Nav from '../../components/Nav/Nav';
import './Dashboard.css';
import AddDogPage from '../AddDogPage/AddDogPage';
import DogGroup from '../../components/DogGroup/DogGroup';
// import { Route, Switch } from 'react-router-dom';
// import EditDogPage from '../EditDogPage/EditDogPage';

const Dashboard = (props) => {
    return (
        <>
        <Nav 
        user={props.user}
        handleLogout={props.handleLogout}
        />

    {/* <Switch> */}

        <AddDogPage 
        handleAddDog={props.handleAddDog}
        />

       {/* <Route exact path='/dashboard/AddDogPage' render={({ history }) =>
            <AddDogPage 
            history={history}
            handleAddDog={props.handleAddDog}
            />
        }/> */}

        <DogGroup
        dogs = {props.dogs}
        handleDeleteDog={props.handleDeleteDog}
        />
         {/* <Route exact path='/dashboard/DogGroup' render={({ history }) =>
            <DogGroup
            dogs = {props.dogs}
            history={history}
            handleDeleteDog={props.handleDeleteDog}
            />
         }/> */}
    {/* <EditDogPage 
    dogs = {props.dogs}
    handleUpdateDog = {props.handleUpdateDog}
    location = {props.location}
    /> */}
    {/* </Switch> */}

        <footer className='header-footer'>
        this is a footer
      </footer>
        </>
    );
};
export default Dashboard;
import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './Dashboard.css';
import AddDogPage from '../AddDogPage/AddDogPage';

const Dashboard = (props) => {
    return (
        <>
        <Nav 
        user={props.user}
        handleLogout={props.handleLogout}
        />

        <AddDogPage 
        handleAddDog={props.handleAddDog}
        />

        <footer className='header-footer'>
        this is a footer
      </footer>
        </>
    );
};



export default Dashboard;
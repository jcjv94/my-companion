import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './Dashboard.css';

const Dashboard = (props) => {
    return (
        <div>
        <Nav 
        user={props.user}
        handleLogout={props.handleLogout}

        />

        {/* <Link >Dogs</Link> */}
        <footer className='header-footer'>
        this is a footer
      </footer>
        </div>
    );
};



export default Dashboard;
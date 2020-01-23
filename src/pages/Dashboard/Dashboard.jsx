import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Dashboard.css";
import AddDogPage from "../AddDogPage/AddDogPage";
import DogGroup from "../../components/DogGroup/DogGroup";

const Dashboard = props => {
  return (
    <>
      <Nav user={props.user} handleLogout={props.handleLogout} />
      <div class="container">
        <AddDogPage handleAddDog={props.handleAddDog} />

        <DogGroup dogs={props.dogs} handleDeleteDog={props.handleDeleteDog} />
      </div>
    </>
  );
};
export default Dashboard;

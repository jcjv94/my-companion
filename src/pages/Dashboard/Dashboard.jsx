import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import "./Dashboard.css";
import AddDogPage from "../AddDogPage/AddDogPage";
import DogDetailPage from "../dogDetailPage/dogDetailPage";

class Dashboard extends Component {
  state = {
    selectedDog: null
  };

  selectDog(dog) {
    this.setState({ selectedDog: dog });
  }

  render() {
    return (
      <>
        <Nav user={this.props.user} handleLogout={this.props.handleLogout} />
        <AddDogPage handleAddDog={this.props.handleAddDog} />
        <div class="container">
          <div class="center-align">
            {this.props.dogs.map(dog => (
              <button
                class="btn btn-small indigo darken-2"
                onClick={() => this.selectDog(dog)}
              >
                {dog.dogName}
              </button>
            ))}
          </div>
          {this.state.selectedDog ? (
            <DogDetailPage
              dog={this.state.selectedDog}
              handleDeleteDog={this.props.handleDeleteDog}
            />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default Dashboard;

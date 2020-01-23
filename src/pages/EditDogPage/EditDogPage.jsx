import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditDogPage.css";
import Nav from "../../components/Nav/Nav";

class EditDogPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.dog
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateDog(this.state.formData);
  };

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <Nav user={this.user} handleLogout={this.handleLogout} />
        <h4 class="center-align"> Add Dog </h4>
        <div class="container">
          <form
            ref={this.formRef}
            autoComplete="off"
            onSubmit={this.handleSubmit}
            class="container row"
          >
            <div class="col s4">
              <label>Dog's Name: </label>
              <input
                className="form-control"
                name="dogName"
                value={this.state.formData.dogName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div class="col s4">
              <label>Breed: </label>
              <input
                className="form-control"
                name="breed"
                value={this.state.formData.breed}
                onChange={this.handleChange}
                required
              />
            </div>
            <div class="col s4">
              <label>Age: </label>
              <input
                className="form-control"
                name="age"
                value={this.state.formData.age}
                onChange={this.handleChange}
                required
              />
            </div>
            <div class="col s4">
              <label>Number of Daily Walks: </label>
              <input
                className="form-control"
                name="numWalks"
                value={this.state.formData.numWalks}
                onChange={this.handleChange}
                required
              />
            </div>
            <div class="col s4">
              <label>Number of Daily Feedings: </label>
              <input
                className="form-control"
                name="numFeedings"
                value={this.state.formData.numFeedings}
                onChange={this.handleChange}
                required
              />
            </div>
            <div class="col s4">
              <label>Number of Daily Medications: </label>
              <input
                className="form-control"
                name="numMeds"
                value={this.state.formData.numMeds}
                onChange={this.handleChange}
              />
            </div>
            <div class="center-align">
              <button type="submit" disabled={this.state.invalidForm} class="btn btn-small green">
                Save
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/dashboard" class="btn btn-small red"><i class="material-icons">cancel</i></Link>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default EditDogPage;

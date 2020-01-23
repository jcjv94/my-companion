import React, { Component } from "react";
import Notes from "../../components/Notes/Notes";
import { Link } from "react-router-dom";

class dogDetailPage extends Component {

  render() {
    return (
      <>
        <table>
          <tr>
            <th class="center-align">Name: {this.props.dog.dogName}</th>
            <th class="center-align">Breed: {this.props.dog.breed}</th>
            <th class="center-align">Age: {this.props.dog.age}</th>
            <th class="center-align">Walks: {this.props.dog.numWalks}</th>
            <th class="center-align">Feedings: {this.props.dog.numFeedings}</th>
            <th class="center-align">Medications: {this.props.dog.numMeds}</th>
            <th class="center-align">Edit</th>
            <th class="center-align">Delete</th>
          </tr>
          <tr>
            <td class="center-align">{this.props.dog.dogName}</td>
            <td class="center-align">{this.props.dog.breed}</td>
            <td class="center-align">{this.props.dog.age}</td>
            <td class="center-align">{this.props.dog.numWalks}
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </td>
            <td class="center-align">{this.props.dog.numFeedings}</td>
            <td class="center-align">{this.props.dog.numMeds}</td>
            <td class="center-align">
              <Link
                to={{
                  pathname: "/edit",
                  state: { dog: this.props.dog }
                }}
                class="btn btn-small purple"
              >
                <i class="material-icons">mode_edit</i>
              </Link>
            </td>
            <td class="center-align">
              <button onClick={() => this.props.handleDeleteDog(this.props.dog._id)} class="btn btn-small red"><i class="material-icons">delete_forever</i></button>
            </td>
          </tr>
        </table>
        <br />
        <Notes dog={this.props.dog} />
      </>
    );
  }
}

export default dogDetailPage;

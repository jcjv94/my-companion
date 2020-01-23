import React, { Component } from "react";
import Notes from "../../components/Notes/Notes";
import { Link } from "react-router-dom";

class dogDetailPage extends Component {

  render() {
    return (
      <>
        <table>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Age</th>
            <th>Walks</th>
            <th>Feedings</th>
            <th>Medications</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>{this.props.dog.dogName}</td>
            <td>{this.props.dog.breed}</td>
            <td>{this.props.dog.age}</td>
            <td>{this.props.dog.numWalks}
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </td>
            <td>{this.props.dog.numFeedings}</td>
            <td>{this.props.dog.numMeds}</td>
            <td>
              <Link
                to={{
                  pathname: "/edit",
                  state: { dog: this.props.dog }
                }}
              >
                Edit
              </Link>
            </td>
            <td>
              <button onClick={() => this.props.handleDeleteDog(this.props.dog._id)}>Delete</button>
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

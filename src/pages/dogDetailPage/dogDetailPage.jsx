import React, { Component } from "react";
import Notes from "../../components/Notes/Notes";
import { Link } from "react-router-dom";

class dogDetailPage extends Component {
  render() {
    const walks = Array(this.props.dog.numWalks)
      .fill()
      .map((_, idx) => {
        return (
          <td class="center-align">
            <label>
              <input type="checkbox" name={`walk${idx}`} />
              <span></span>
            </label>
          </td>
        );
      });

    const feedings = Array(this.props.dog.numFeedings)
      .fill()
      .map((_, idx) => {
        return (
          <td class="center-align">
            <label>
              <input type="checkbox" name={`feedings${idx}`} />
              <span></span>
            </label>
          </td>
        );
      });

    const meds = Array(this.props.dog.numMeds)
      .fill()
      .map((_, idx) => {
        return (
          <td class="center-align">
            <label>
              <input type="checkbox" name={`meds${idx}`} />
              <span></span>
            </label>
          </td>
        );
      });

    return (
      <>
        <table>
          <tr>
            <th class="">Name: {this.props.dog.dogName}</th>
            <th class="">Breed: {this.props.dog.breed}</th>
            <th class="">Age: {this.props.dog.age}</th>
            <th class="center-align">
              <Link
                to={{
                  pathname: "/edit",
                  state: { dog: this.props.dog }
                }}
                class="btn btn-small purple"
              >
                <i class="material-icons">mode_edit</i>
              </Link>
            </th>
            <th class="center-align">
              <button
                onClick={() => {
                  this.props.refresh()
                  this.props.handleDeleteDog(this.props.dog._id)}
                } 
                class="btn btn-small red"
              >
                <i class="material-icons">delete_forever</i>
              </button>
            </th>
          </tr>

          <tr>
            <th class="">Walks: {this.props.dog.numWalks}</th>
            {walks.map(walk => walk)}

            <input type="checkbox" />
          </tr>

          <tr>
            <th class="">Feedings: {this.props.dog.numFeedings}</th>
            {feedings.map(feedings => feedings)}

            <input type="checkbox" />
          </tr>

          <tr>
            <th class="">Medications: {this.props.dog.numMeds}</th>
            {meds.map(meds => meds)}

            <input type="checkbox" />
          </tr>
        </table>
        <br />
        <Notes dog={this.props.dog} />
      </>
    );
  }
}

export default dogDetailPage;

import React, { Component } from "react";
import Notes from "../../components/Notes/Notes";
import { Link } from "react-router-dom";

class dogDetailPage extends Component {

  render(props) {
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
            <td>{dog.dogName}</td>
            <td>{dog.breed}</td>
            <td>{dog.age}</td>
            <td>{dog.numWalks}</td>
            <td>{dog.numFeedings}</td>
            <td>{dog.numMeds}</td>
            <td>
              <Link
                to={{
                  pathname: "/edit",
                  state: { dog }
                }}
              >
                Edit
              </Link>
            </td>
            <td>
              <button onClick={() => handleDeleteDog(dog._id)}>Delete</button>
            </td>
          </tr>
        </table>
        <br />
        <Notes dog={dog} />
      </>
    );
  }
}

export default dogDetailPage;

import React from 'react';
import {Link} from 'react-router-dom';
import './DogGroup.css';

function DogGroup(props) {
    return (
        <>
        {
            props.dogs.map(dog => {
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
                    </tr>
                    <tr>
                        <td>{dog.dogName}</td>
                        <td>{dog.breed}</td>
                        <td>{dog.age}</td>
                        <td>{dog.numWalks}</td>
                        <td>{dog.numFeedings}</td>
                        <td>{dog.numMeds}</td>
                        <td><Link>Details </Link></td>
                        <td><Link>Edit</Link></td>
                        <td><Link>Delete</Link></td>
                    </tr>
                </table>
                    <br/>
                </>
                );
                
            })
        }

        {/* <button onClick={() => handleDeleteDog(dog._id)}>Delete</button> */}

        </>
    );
}

export default DogGroup;
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
                    <h3>{dog.dogName}</h3>
                    <h3>{dog.breed}</h3>
                    <h3>{dog.age}</h3>
                    <h3>{dog.numWalks}</h3>
                    <h3>{dog.numFeedings}</h3>
                    <h3>{dog.numMeds}</h3>
                    <br/>
                </>
                );
                
            })
        }


        <Link>Details </Link>

        <Link>Edit</Link>

        {/* <button onClick={() => handleDeleteDog(dog._id)}>Delete</button> */}

        </>
    );
}

export default DogGroup;
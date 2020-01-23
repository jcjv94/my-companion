import React from "react";
import { Link } from "react-router-dom";
import "./DogGroup.css";
import Notes from "../../components/Notes/Notes";
import DogDetailPage from "../../pages/dogDetailPage/dogDetailPage"

function DogGroup({ dogs, handleDeleteDog }) {

  return (
    <>
      <div class="container">
        {dogs.map(dog => {
          return (
            <>
                <DogDetailPage 
                dog={dog}
                handleDeleteDog={handleDeleteDog}
                />
            </>
          );
        })}
      </div>
    </>
  );
}

export default DogGroup;

import React from "react";
import "./DogGroup.css";
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

import React from 'react';

const PuppyDetails = ({ selectedPuppy, goToList }) => {
  return (
    <>
      <h1>Puppy Details</h1>
      <p>Name: {selectedPuppy.name}</p>
      <p>Breed: {selectedPuppy.breed}</p>
      <p>Status: {selectedPuppy.status}</p>
      <img src={selectedPuppy.imageUrl} alt={selectedPuppy.name} />
      <br/>
      <br/>
      <button onClick={goToList}>Go back to List</button>
    </>
  );
};

export default PuppyDetails;
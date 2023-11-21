import React, { useEffect, useState } from "react";

const PuppyList = ({ handlePuppyClick }) => {
  const [allPuppyList, setAllPuppyList] = useState([]);

  useEffect(() => {
    const getPuppies = async () => {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`
        );
        const results = await response.json();
        const allPuppies = results.data.players;
        setAllPuppyList(allPuppies);
      } catch (error) {
        console.error("Error fetching puppy list:", error);
      }
    };
    getPuppies();
  }, []);

  return (
    <>
    <div className="flexwrap">
      {allPuppyList.map((singlePuppy) => (
        <div key={singlePuppy.id} onClick={() => handlePuppyClick(singlePuppy)}>
          {singlePuppy.name}
          <p>{singlePuppy.breed}</p>
          <img id="pic" src={singlePuppy.imageUrl} alt={singlePuppy.name} />
          <p>{singlePuppy.status}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default PuppyList;

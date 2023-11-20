import { useEffect, useState } from "react";

const PuppyList = () => {

const [allPuppyList , setAllPuppyList] = useState([])

  useEffect(() => {
    
      const getPuppies = async() => {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`
      );
      const results = await response.json();
      console.log(results);
      const allPuppies = results.results;
      setAllPuppyList(allPuppies);
      console.log(allPuppyList);
    };
    getPuppies();
  },[]);

  return (
  <h1>Puppy List</h1>);
};
export default PuppyList;


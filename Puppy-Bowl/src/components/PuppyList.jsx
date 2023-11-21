import { useEffect, useState } from "react";

const PuppyList = () => {
  const [allPuppyList, setAllPuppyList] = useState([]);

  useEffect(() => {
    const getPuppies = async () => {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`
      );
      const results = await response.json();
      // console.log("results", results);
      const allPuppies = results.data.players;
      console.log("allPuppies", allPuppies);
      setAllPuppyList(allPuppies);
      // console.log(allPuppyList);
    };
    getPuppies();
  }, []);

  return (
    <>
      <h1>Puppy List</h1>
      {console.log(allPuppyList)}
      {
        allPuppyList.map((singlePuppy)=>{
          return(
            <div onClick={()=>{
              setShowDetails(true);
              setSinglePuppyImgUrl(allPuppies.data.players.imageURL);
            }} key={singlePuppy.id}>{singlePuppy.name}
            </div>
          )
        })
      }

    </>
  );
};
export default PuppyList;

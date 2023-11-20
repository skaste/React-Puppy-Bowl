import { useEffect, useState } from "react";

const PuppyDetails=(singlePuppyDetails, setShowDetails)=>{
const [singlePuppyDetails, setSinglePuppyDetails]=useState({});

useEffect(()=>{
  const getSinglePuppy= async()=>{
    const response = await fetch(singlePuppyDetails);
    const singlePuppy = await response.json();
    setSinglePuppyDetails(singlePuppy);
  }
  getSinglePuppy();
}, [])

return(
  <>
  <h1>Puppy Details</h1>
  {
    <p>{singlePuppyDetails.name}</p>
  }
  </>
)
}
export default PuppyDetails
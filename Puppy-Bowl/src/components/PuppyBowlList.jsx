import { useEffect } from "react"


const PuppyList=() => {
useEffect(()=> {
  const getPuppies = ()=>{
    const response = fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`)
  console.log(response);
  }
})
}
export default PuppyList
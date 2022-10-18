import { useState } from "react";
import Navbar from "./assets/components/Navbar";


function App() {
  const [count, setCount] = useState(0);
  const increse = ()=>{
    return setCount(count +1)
  }
  console.log(count);
  const personArray = [
    {
      name: 'Zahid',
      age: 18,
      collage: 'Bangladesh University',
      university: "University of Dhaka",
    }, 
    {
      name: 'Mainuddin Sani',
      age: 18,
      collage: 'Bangladesh University',
      university: "University of Dhaka",
    }
  ];


  return (
    <>
      {
        personArray.map((person, i) => <Person person={person} count={count} increse={increse} key={i}></Person>)
      }
    </> 
  );
}

function Person(props){
  const {name, collage, Number} = props.person
  // const {name, proffesion} = props
  return (
    <div className="person">
        <h1>{name}</h1>
        <p>{collage}</p>

        <p>Count : {props.count}</p>
        <button className="px-3 py-2 rounded-md bg-yellow-500 text-fuchsia-100" onClick={props.increse}>plus</button>
    </div>
  )
}
export default App;

import React, { useState } from 'react'


let newArr = [
  {
    name: "Abid",
    age: 22,
    mass: '72',
    eye_color: "black",
    gender: "male",
    id: 4,

  },
  {
    name: "Ali",
    age: 18,
    mass: '62',
    eye_color: "red",
    gender: "female",
    id: 2,

  },
  {
    name: "Asad",
    age: 6,
    mass: '85',
    eye_color: "blue",
    gender: "female",
    id: 3,

  },
  {
    name: "Asfar",
    age: 17,
    mass: '55',
    eye_color: "red",
    gender: "male",
    id: 4,
  }
];

let onIDBase = newArr.map(item => item.id > 3);
console.log(onIDBase)
// console.log(newArr);
let c = newArr.filter(item => item.age <= 17 && !(item.age < 10));
// console.log(c);
// console.log(newArr);
// console.log(d);
// console.log(newArr);
let f = newArr.map(item => item.name && item.age); //why only the item.age is getting console?
console.log(f) //here item.name should also get consolled ?

const JanuraryList = () => {
  const [first, setFirst] = useState("");
  const [count, setCount] = useState([]);

  return (
    <>
      <h1>Filtering Items there</h1>

    </>
  )
}

export default JanuraryList;
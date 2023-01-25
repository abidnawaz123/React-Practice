import React, { useState, useRef } from 'react'

const AbidList = () => {
  const [first, setFirst] = useState("");
  const [emptyarray, setEmptyArray] = useState([]);
  let itemevent = (event) => {
    setFirst(event.target.value);
  }
  let deleting = (ind) => {
    setEmptyArray(emptyarray.filter((item, i) => {
      return i !== ind;
    }))
  }
  console.log(itemevent)
  let focusit = useRef(0);


  let myfunc = () => { setEmptyArray((itemshere) => { return [...itemshere, first] }); setFirst(""); focusit.current.focus() };
  return (
    <>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <input type="text" ref={focusit} value={first} onChange={itemevent} />
        <button onClick={myfunc}>Click</button> <br></br>

        {emptyarray.map((elem, ind) => {
          return (
            <li type="none"> {elem} <button onClick={() => deleting}>Del</button></li>
          )
        })}



      </div>
    </>
  )
}
export default AbidList
import React, { useState } from 'react';
import Deletiontodo from './deletiontodo';

const Todolist = () => {
    const [inputlist, setInputlist] = useState("");
    const [items, setItems] = useState([]);
    const itemEvent = (event) => { setInputlist(event.target.value) }
    const listofitems = () => {
        setItems((olditems) => [...olditems, inputlist])
    };
    let deletion = (id) => {
        console.log("DELETED");
        setItems((olditems) => olditems.filter((arrayElem, index) => index !== id))
    };
    return (
        <>
            <div className='main-div'>
                <div>
                    <h1>TO Do List here</h1>
                    <input type={"text"} id="myfield" onChange={itemEvent} autoComplete="off" />
                    <button onClick={listofitems}>Add</button>
                </div>
                <div className='jeopak'>
                    {
                        items.map((itemval, index) => <Deletiontodo id={index} text={itemval} onSelect={deletion} />)
                    }
                </div>
            </div>
        </>
    )
}
export default Todolist

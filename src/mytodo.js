import React, { useState } from 'react'

const Mytodo = () => {
    const [itemlist, setItemList] = useState("");
    const [isMatched, setIsMatch] = useState(false);
    const [value, setValue] = useState([]);
    const [idx, setIdx] = useState(null);


    const itemevent = (event) => {
        setItemList(event.target.value);
        let newArr = value.slice();

        const machValue = newArr.find((e) => {
            return e === event.target.value;
        });

        console.log("machValue", machValue);
        if (machValue) {
            setIsMatch(true);
            setIdx(newArr.indexOf(event.target.value))
        } else {
            setIsMatch(false);
        }
    };
    const addvalue = () => {
        setValue((olddata) => {
            return [...olddata, itemlist];
        })
        setItemList("");
    }
    return (
        <>
            <h1> My Todo List</h1>
            <input type="text" value={itemlist} onChange={itemevent} />
            <button disabled={isMatched} onClick={addvalue}>{" "} Click{" "} </button>
            {
                value.map((totalitem, ind) => {
                    return (
                        <li type="none" id={ind} style={
                            (ind == idx && isMatched)
                                ? { color: "red" }
                                : { color: "black" }
                        }> {totalitem}</li>
                    );
                })}
            <p> {isMatched ? "It already exist" : ""} </p>


        </>
    );
}


export default Mytodo

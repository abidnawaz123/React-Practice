import React, { useState } from "react";

const Usingstate1 = () => {
    const [count, setCount] = useState("");
    const [empty, setEmpty] = useState([]);
    const [updateIndex, setUpdateIndex] = useState(-1);

    let getval = (event) => {
        setCount(event.target.value);
    };
    const add = () => {
        setEmpty((items) => {
            return [...items, count];
        });
        setCount("");
        setUpdateIndex(-1)
    }
    const updateItem = () => {
        let allItem = [...empty]
        allItem[updateIndex] = count
        setEmpty(allItem)
        setUpdateIndex(-1)
    }
    let myfunction = () => {
        if (updateIndex === -1) {
            add()
        } else {
            updateItem()
        }
    };
    let deletion = (ind) => {
        setEmpty(
            empty.filter((item, i) => {
                return i !== ind;
            })
        );
    };
    const editt = (ind) => {
        console.log(ind)
        let newedititem = empty.find((item2, myindex2) => {
            // console.log(item2, myindex2)
            return myindex2 === ind;
        })
        setCount(newedititem);
        setUpdateIndex(ind);
    }
    return (
        <div>
            <h1>TO DO LIST</h1>
            <input typeof="text" value={count} onChange={(e) => getval(e)} />
            <button onClick={myfunction}>Click</button>
            {empty.map((elem, ind) => {
                return (
                    <li type="none" key={elem.id} id={ind}>
                        {elem}
                        <button onClick={() => deletion(ind)}>Del</button>
                        <button onClick={() => editt(ind)}>Edit</button>
                    </li>
                );
            })}
        </div>
    );
};
export default Usingstate1;
import React, { useState } from "react";

const Usingstate1 = () => {
    const [count, setCount] = useState("");
    const [empty, setEmpty] = useState([]);

    let getval = (event) => {
        setCount(event.target.value);
    };
    let myfunction = () => {
        setEmpty((items) => {
            return [...items, count];
        });
        setCount("");
    };
    let deletion = (ind) => {
        setEmpty(
            empty.filter((item, i) => {
                return i !== ind;
            })
        );
    };
    const editt = (ind) => {
        let newedititem = count.find((item2, myindex2) => {

            return myindex2 === ind;
        })
        setCount(newedititem);

    }
    console.log('testing', empty);
    return (
        <div>
            <h1>TO DO LIST</h1>
            <input typeof="text" value={count} onChange={(e) => getval(e)} />
            <button onClick={myfunction}>Click</button>
            {empty.map((elem, ind) => {
                return (
                    <li type="none" key={elem.id} id={ind}>
                        {count}
                        <button onClick={() => deletion(ind)}>Del</button>
                        <button onClick={() => editt(ind)}>Edit</button>
                    </li>
                );
            })}
        </div>
    );
};

export default Usingstate1;

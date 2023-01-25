import React, { useState } from "react";

const Usingstate2 = () => {
    const [count, setCount] = useState("");
    const [empty, setEmpty] = useState([]);
    const [finalist, setFinalist] = useState({});
    const [buttonchange, setButtonchange] = useState("add");


    let getval = (event) => {
        setCount(event.target.value);
        setButtonchange("add");
        if (setButtonchange === "add") {
            setCount("");
        }
        else {
            setButtonchange("add")
        }
        setCount("");
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
        let newedititem = empty.find((item2, myindex2) => {
            return myindex2 === ind;

        });
        setButtonchange("update")
        const itemClon = [...empty];
        itemClon[newedititem] = ind;
        setCount(itemClon);
        // setCount(count);
        console.log("Edit item match", itemClon);
    };
    return (
        <div>
            <h1>TO DO LIST</h1>
            <input
                typeof="text"
                value={count}
                onChange={(e) => {
                    getval(e);
                    setFinalist((prev) => ({
                        ...prev,
                        count: e.target.value,
                    }));
                }}
            />
            <button onClick={myfunction}>Click</button>
            {empty.map((elem, ind) => {
                return (
                    <li type="none" key={elem.id} id={ind}>
                        {elem}
                        <button onClick={() => deletion(ind)}>Del</button>
                        <button
                            onClick={() => {
                                editt(ind);
                                setFinalist(ind);
                            }}
                        >
                            Edit
                        </button>
                    </li>
                );
            })}
        </div>
    );
};

export default Usingstate2;

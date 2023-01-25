import React, { useState } from 'react'
import New from './New';
const MyNew = () => {
    const [count, setCount] = useState("");
    const [list, setList] = useState([]);

    let value = (event) => {
        setCount(event.target.value);
    }
    let myfunc = () => {
        setList((olditems) => {
            return [...olditems, count];
        })
    }
    return (
        <>
            <div>
                <h1>To Do List here</h1>
                <input type={"text"} onChange={value} />
                <button onClick={myfunc}>Click</button>
            </div>
            <div>
                {
                    list.map((item, value) => {
                        return <New />
                    })
                }
            </div>
        </>
    )
}

export default MyNew
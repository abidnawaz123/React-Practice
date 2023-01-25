import React, { useState } from 'react'

const Final = () => {

    const [userInput, setuserInput] = useState("");
    const [data, setData] = useState([]);
    let myfunc = (event) => {
        setuserInput(event.target.value);

    }
    let addvalue = () => {
        setData((items) => {
            return [...items, userInput]
        });
        setuserInput("")
    }

    return (
        <>
            <div>
                <h1>{userInput}</h1>
                <h1>To Do List</h1>
                <input type="text" value={userInput} onChange={(e) => {
                    myfunc(e)
                }} />
                <button onClick={addvalue}>Click</button>

                {
                    data.map((itemsVal, ind) => {
                        return <li type="none">{itemsVal}                        
                        </li>
                    })
                }

            </div>
        </>
    )
}

export default Final




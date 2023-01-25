import React, { useState, useEffect, useRef } from 'react'

const UseRef1 = () => {
    const [first, setfirst] = useState("");
 
    const abid = useRef(0);
    let mychanging = (event) => {
        setfirst(event.target.value);
    }
    useEffect(() => {
        abid.current = abid.current + 1;
    })

    return (
        <>
            <input type="text" onChange={(e) => mychanging(e)} />
            <button>Button</button>
            <li type="none">{first}</li>
            <li type="none">Typed {abid.current} times</li>
        </>
    )
}

export default UseRef1
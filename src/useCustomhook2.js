import React from 'react'
import CustomHook from './CustomHook'

const UseCustomHook2 = () => {
    const [count, Increment, Decrement] = CustomHook();

    return (
        <div>
            <br /><br /><br />
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrease</button>
        </div>
    )
}

export default UseCustomHook2
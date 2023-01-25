import React from 'react'
import CustomHook from './CustomHook';
const UseCustomHook1 = () => {
    const [count,Increment,Decrement] = CustomHook();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increase</button>
        <button onClick={Decrement}>Decrease</button>
    </div>
  )
}

export default UseCustomHook1
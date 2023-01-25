import React, { useReducer, useRef } from 'react'




function funct() {
    return state * 5;

  }
//SECOND DIV SECTION STARTS HERE
let initialstate = 0;
let reducer = (state, action) => {
    switch (action) {
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        default:
            return state;
    }
}
//SECOND DIV SECTION ENDS HERE

const useReffocus = () => {

    const [state, dispatch] = useReducer(reducer, initialstate);

    //FIRST DIV SECTION HERE
    const focusme = useRef(0);

    const follow = () => {
        focusme.current.focus();
        focusme.current.style.color = "blue";
    }
    //FIRST DIV SECTION HERE
    return (
        <>
            <div className='section1'>
                <input type="text" ref={focusme} />
                <button onClick={follow}>Button</button>
            </div>

            <div className='section2'>
                <h1>Another Function here</h1>
                <h1>{state}</h1>
                <button onClick={() => dispatch("Increment")}>Increment</button>
                <button onClick={() => dispatch("Decrement")}>Decrement</button>
            </div>
        </>
    )
}
export default useReffocus
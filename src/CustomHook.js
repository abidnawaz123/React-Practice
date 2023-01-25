import React, { useState } from 'react';

const CustomHook = () => {
    const [count, setCount] = useState(0);
    function Increment() {
        return setCount(count + 1);
    }
    function Decrement() {
        return setCount(count - 1);
    }
    return [count, Increment, Decrement];
}

export default CustomHook;




























//useRef is used to access DOM element direclty
//useReducer is similar to useState and is used to create custom state logics and used in complex logics 
//useMemo is used to improve Performance and returns memorized value
//useCallback is used to improve Performance and returns memorized function
//Custom Hooks are used when you have a same logic of state to be used in several components 
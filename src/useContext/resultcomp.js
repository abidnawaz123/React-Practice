import React, { useState, useContext, createContext } from 'react';
import { data1 } from './inputcomp';
import Myline from './myline';

const child1 = createContext();
const ResultComp = () => {
    const [inputVal, setInputVal] = useState("");
    const { setValu } = useContext(data1);
    let myfunc = () => {
        setValu((olditem) => {
            return [...olditem, inputVal];
        });
        setInputVal("");
    }
    return (
        <>
            <h1>Hello useContext</h1>
            <input type="text" onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
            <button onClick={myfunc}>CLick</button>
            {/* <li>{valu}</li> */}
            {/* <h1>{valu}</h1> */}
            <child1.Provider>
                <Myline />
            </child1.Provider>
        </>
    )
}

export default ResultComp
export { child1 };
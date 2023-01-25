import React, { useState, useContext, createContext } from 'react';
import ResultComp from './resultcomp';

const data1 = createContext();
const data2 = createContext();
const data3 = createContext();
const data4 = createContext();

const Inputcomp = () => {
    const [count, setcount] = useState("");
    const [valu, setValu] = useState([]);

    return (
        <>
            <data1.Provider value={{ count, setcount, valu, setValu }}>
                <ResultComp />
            </data1.Provider>
        </>
    )
}
export default Inputcomp;
export { data1, data2, data3, data4 };
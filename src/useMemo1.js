import React, { useMemo, useState } from 'react';

const UseMemo1 = () => {
    const [first, setFirst] = useState(0);
    const [update, setUpdate] = useState(10);

    let mymemohook = useMemo(() => {
        console.log("MEMO")
        return first * 5;
    }, [first]);
    return (
        <>
            <div>
                <h1>{`5 * ${first} = ${mymemohook}`} </h1>
                <h1>Updated : {update}</h1>
                <button onClick={() => setFirst(first + 1)}>ADD</button>
                <button onClick={() => setUpdate(update * 2)}>UPDATE</button>

                <h1>UseMemoOne</h1>
            </div>
        </>
    )
}

export default UseMemo1 
import React, { useMemo, useState } from 'react'

const UseMemo2 = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(5);

    let memofunc = useMemo(() => {
        console.log("Memo")
        return count * 2;
    }, [count])
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>UseMemo2</h1>
                <h1>{count}</h1>
                <h1>{memofunc}</h1>
                <h1>{item}</h1>
                <button onClick={() => setCount(count + 1)}>Add</button> <br />
                <button onClick={() => setItem(item * 2)}>Update</button>
            </div>

        </>
    )
}

export default UseMemo2 
import React, { useContext } from 'react'
// import { data3 } from './inputcomp'
// import { child1 } from './resultcomp'
import { data1 } from './inputcomp'


const Myline = () => {
    // const myoutput = useContext(child1)
    const { valu } = useContext(data1);

    return (
        <li type="none" dir='column'>{valu}</li>
    )
}

export default Myline
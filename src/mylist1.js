import React, { useState } from 'react'

const Mylist1 = () => {

    const [count, setCount] = useState("");
    const [mylist, setMylist] = useState([]);
    const [updating, setMyupdating] = useState(-1);
    const [ismatched, setIsMatched] = useState(false);

    let newArray = mylist.slice();
    const matchval = newArray.find((e) => {
        return e === e.target.value;
    })

    const getValue = (event) => {
        setCount(event.target.value);
    }

    const adding = () => {
        setMylist((myitems) => {
            return [...myitems, count]
        })
        setCount("");
    }
    const update = () => {
        let allitems = [...mylist]
        allitems[updating] = count;
        setMylist(allitems)
        setMyupdating(-1)
    }

    const myfunction1 = (elem) => {
        if (updating === -1) {
            if (count !== elem) {
                adding()
            } else {
                alert("Change it")
            }
        }
        else {
            update()
        }
    }
    let deletion = (ind) => {
        setMylist(
            mylist.filter((item, i) => {
                return i !== ind;
            })
        )
    }
    let edit = (ind) => {
        console.log(ind);
        let newitems = mylist.find((item2, index2) => {
            return index2 === ind;
        })
        setCount(newitems);
        setMyupdating(ind)
    }

    let checkingcondition = (elem, ismatched) => {
        if (count === elem) {
            setIsMatched()
            console.log("hey")
        } else {

        }

    }
    return (
        <>
            <div>
                <h1>To Do List</h1>
                <p>{ismatched ? "Already exists" : " "}</p>
                <input type="text" value={count} onChange={(e) => getValue(e)} />
                <button onClick={myfunction1} disabled={ismatched}>click me</button>
                {
                    mylist.map((elem, ind) => {
                        return (
                            <li type="none" className='myline' key={elem.id} id={ind}>{elem}
                                {checkingcondition(elem)}
                                <button onClick={() => deletion(ind)}><i class="fa-solid fa-trash"></i></button>
                                <button onClick={() => edit(ind)}><i class="fa-solid fa-pen-to-square"></i></button>
                            </li>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Mylist1
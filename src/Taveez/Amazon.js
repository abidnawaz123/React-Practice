import React from 'react';


let myarray = [
    { name: "test1", color: "red", price: 10, size: 1 },
    { name: "test2", color: "green", price: 20, size: 1 },
    { name: "test3", color: "blue", price: 30, size: 1 },
    { name: "test4", color: "yellow", price: 40, size: 1 },
    { name: "test5", color: "orange", price: 50, size: 1 },
    { name: "test6", color: "pink", price: 60, size: 1 },
]

const Amazon = ({handleclick}) => {
    

    return (
        <>
            {myarray.map((items, Ind) => {
                return (
                    <div className='Products-field'>
                        <div >
                            <h1>{items.name}</h1>
                            <p>{items.price}</p>
                            <p>{items.size}</p>
                            <p>{items.color}</p>
                            <button onClick={() => handleclick(items, Ind)} key={items.id}>Add Item</button>
                        </div>
                    </div>);
            })}
        </>

    )
}

export default Amazon
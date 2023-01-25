import React, { useState } from 'react'


let myarray = [
    { name: "test1", color: "red", price: 10, size: 1, id: 1 },
    { name: "test2", color: "green", price: 20, size: 1, id: 2 },
    { name: "test3", color: "blue", price: 30, size: 1, id: 3 },
    { name: "test4", color: "yellow", price: 40, size: 1, id: 4 },
    { name: "test5", color: "orange", price: 50, size: 1, id: 5 },
    { name: "test6", color: "pink", price: 60, size: 1, id: 6 },
];

const AddItem = (item) => {

}
const Home = () => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);
    const myprop1 = product;
    return (
        <>
            {myarray.map((items, index) => {
                return (
                    <div className='AvailableProducts'>
                        <h2>Product{index}</h2>
                        <h3>{items.name}</h3>
                        <p>{items.price}</p>
                        <p>{items.size}</p>
                        <p>{items.color}</p>
                        <button onClick={() => AddItem(items, index)} >Click</button>
                    </div>);
            })}
        </>
    )
}
export default Home
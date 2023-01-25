import React, { useState, createContext } from 'react';
import MyCart from './MyCart';

let myarray = [
    { name: "test1", color: "red", price: 10, size: 1, id: 1 },
    { name: "test2", color: "green", price: 20, size: 1, id: 2 },
    { name: "test3", color: "blue", price: 30, size: 1, id: 3 },
    { name: "test4", color: "yellow", price: 40, size: 1, id: 4 },
    { name: "test5", color: "orange", price: 50, size: 1, id: 5 },
    { name: "test6", color: "pink", price: 60, size: 1, id: 6 },
];

const Create = () => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);

    const data1 = createContext();

    let AddItem = (item) => {
        const match = product.find((items) => items.id == item.id);
        // console.log('first', match)
        if (!match) {
            setProduct(prevState => ([...prevState, item]));
        }
        if (match) {
            setError(true)
        }
    }
    let Increment = (id) => {
        const findIndex = product.findIndex(item => item.id === id);
        if (findIndex !== -1) {
            const arr = [...product];
            arr[findIndex].size = arr[findIndex].size + 1;
            setProduct(arr);
            setError(false);
        }
    }
    let Decrement = (id) => {
        const findIndex2 = product.findIndex(item => item.id == id);
        if (findIndex2 !== -1) {
            const arr2 = [...product];
            if (arr2[findIndex2].size <= 1) {
                alert("Product can't be Empty")
            } else {
                arr2[findIndex2].size = arr2[findIndex2].size - 1;
            }
            setProduct(arr2);
            setError(false);
        }
    }
    let deleteProduct = (item) => {
        const result = product.filter((items) => items.id !== item.id);
        setProduct([...result]);
        setError(false);
    }

    return (
        <>
            {/* <Route path='/mycart' component={MyCart} /> */}

            <h1 style={{ textAlign: "center" }}>Product here</h1>
            <div className='head'>
                {myarray.map((items, index) => {
                    return (
                        <div className='itemone'>
                            <h2>Product{index}</h2>
                            <h3>{items.name}</h3>
                            <p>{items.price}</p>
                            <p>{items.size}</p>
                            <p>{items.color}</p>
                            <button onClick={() => AddItem(items, index)} >Click</button>
                        </div>);
                })}
            </div>
            <div>
                {error ? <h4 style={{ color: "red" }}>error</h4> : ''}
            </div>
        </>
    )
}
export default Create;
// export { data1 };
import React, { useState } from 'react';

let myarray = [
    { name: "test1", color: "red", price: 10, size: 1, id: 1 },
    { name: "test2", color: "green", price: 20, size: 1, id: 2 },
    { name: "test3", color: "blue", price: 30, size: 1, id: 3 },
    { name: "test4", color: "yellow", price: 40, size: 1, id: 4 },
    { name: "test5", color: "orange", price: 50, size: 1, id: 5 },
    { name: "test6", color: "pink", price: 60, size: 1, id: 6 },
];

const BackupAddtocart = () => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);

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
            <table border={1} width="90%">
                <tr>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Per Item Price</th>
                    <th>Total</th>
                </tr>
                {product.map((prdt, myindex) => (
                    <tr >
                        <td> {prdt.name} </td>

                        <td >
                            <button onClick={() => Decrement(prdt.id)}>-</button>
                            {prdt.size}
                            <button onClick={() => Increment(prdt.id)}>+</button>
                        </td>
                        <td>{prdt.price}</td>
                        <td>{prdt.price * prdt.size}</td>
                        <td><button onClick={() => deleteProduct(prdt)}>X</button></td>
                        {/* <td>grand total : {prdt.size * prdt.price}</td> */}
                    </tr>
                ))}
            </table>

            <div>
                {error ? <h4 style={{ color: "red" }}>error</h4> : ''}
            </div>
        </>
    )
}

export default BackupAddtocart
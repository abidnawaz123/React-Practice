import React, { useState } from 'react';

let myarray = [
    { name: "test1", color: "red", price: 10, size: 1, id: 1, isAddedtoCart: false },
    { name: "test2", color: "green", price: 20, size: 1, id: 2, isAddedtoCart: false },
    { name: "test3", color: "blue", price: 30, size: 1, id: 3, isAddedtoCart: false },
    { name: "test4", color: "yellow", price: 40, size: 1, id: 4, isAddedtoCart: false },
    { name: "test5", color: "orange", price: 50, size: 1, id: 5, isAddedtoCart: false },
    { name: "test6", color: "pink", price: 60, size: 1, id: 6, isAddedtoCart: false },
];
const BackupAddtocart = () => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);
    const [visible, setVisible] = useState(false);
    const [delfromCart, setDelfromCart] = useState([]);
    const [checkBtn, setCheckBtn] = useState(0);

    let AddItem = (item, id) => {
        //Adding Item in Cart
        const match = product.find((items) => items.id == item.id);
        //Deleting Item Directly on button press
        item.isAddedtoCart = true;
        if (item.isAddedtoCart == true) {
            let filtered = product.filter(myitem => myitem.id !== item.id);
            setProduct([...filtered]);
        };
        if (!match) {
            setProduct(prevState => ([...prevState, item]));
        }
        //Toggling Button
        const index = delfromCart.findIndex(items => items == item.id);
        console.log("before",delfromCart);

        if (index != -1) {
            const filtered = delfromCart.filter(myitem => myitem !== item.id);

            setDelfromCart([...filtered]);
        } else {
            setDelfromCart(prevState => [...prevState, item.id]);
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
                alert("Product can't be Empty");
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
            {visible ?
                <div className='summary'>
                    <h1 style={{ textAlign: "center", marginTop: '2rem' }}>Product Summary</h1>
                    <table border={1} width="90%">
                        <tr>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Per Item Price</th>
                            <th>Total</th>
                        </tr>
                        {product.map((prdt) => {
                            return (
                                <tr >
                                    <td> {prdt.name} </td>
                                    <td ><button onClick={() => Decrement(prdt.id)} className="mybutton">-</button>
                                        {prdt.size}
                                        <button onClick={() => Increment(prdt.id)} className="mybutton">+</button>
                                    </td><td>{prdt.price}</td>
                                    <td>{prdt.price * prdt.size}</td>
                                    <td><button onClick={() => deleteProduct(prdt)}>X</button></td></tr>)
                        })}
                    </table> <h3> GrandTotal : {product.reduce((a, b) => a + b.price * b.size, 0)}</h3 ></div>
                :
                <div className='products'>
                    <h1 style={{ textAlign: "center", marginTop: '2rem' }}>Product here</h1>
                    <div className='head'>
                        {myarray.map((items, index) => {
                            return (
                                <div className='itemone'>
                                    <h2>Product{items.id}</h2>
                                    <h3>{items.name}</h3>
                                    <p>P.Price {items.price}</p>
                                    <p>P.Color {items.color}</p>
                                    <button onClick={() => AddItem(items, index)}> {delfromCart.includes(items.id) ? "Del from cart " : "Add to cart"}</button >
                                </div>);
                        })}
                    </div>
                </div>
            }
            <div className='buttons'>
                {!visible ?
                    <button onClick={() => setVisible(true)}> Cart({product.length})</button>
                    :
                    <button onClick={() => setVisible(false)}> Back To Shopping </button>
                }
            </div>
            <div>
                {error ? <h4 style={{ color: "red" }}>Can't Add Same Item Twice </h4> : ''}
            </div>
        </>
    )
}

export default BackupAddtocart;
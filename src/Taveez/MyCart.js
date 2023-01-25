import React, { useContext } from 'react';
// import { data1 } from './Create';

const MyCart = (product) => {
    // const { setval } = useContext(data1);
    return (
        <>
            <div>
                <i className="fa-solid fa-cart-shopping" style={{ cursor: "pointer" }}>
                </i>
                {/* {setval} */}
                <span style={{ top: "-15", color: "red" }}>{product.length}</span>
            </div>

            {/* <table border={1} width="90%">
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
                </tr>
            ))}
        </table> */}
        </>
    )
}

export default MyCart;

import React, { useEffect, useState } from 'react';

const FetchFakeApi = () => {
    const [count, setCount] = useState(false);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((result) => {
            result.json().then((resp) => {
                setApiData(resp);
            })
        })
    }, [count]);
    let func = () => {
        setCount(!count);
    }
    return (
        <>
            <div>
                <button onClick={func}>Click</button>
            </div>
            {apiData.length ?
                <div>
                    {apiData.map(elem => (
                        <div>
                            <p><img src={elem.image} alt={elem.title} width="10%" /> </p>
                            <p>{elem.id} {elem.title}</p>
                        </div>
                    ))}
                </div>
                :
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
        </>
    )
}
export default FetchFakeApi;
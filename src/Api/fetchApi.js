import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// http://localhost:3001/todos
const FetchApi = () => {
    // const [myData, setMyData] = useState([]);
    // const [showError, setShowError] = useState("");
    const [store, setStore] = useState([]);
    const [newErr, setNewErr] = useState("");

    const [title, setTitle] = useState("");
    // const [thebody, setThisbody] = useState("");

    // console.log(store)
    // get post put delete are methods to work with

    //axios
    // useEffect(() => {
    //     axios.get("http://localhost:3001/todos")
    //         .then((resp) => setMyData(resp.data))
    //         .catch((error) => setShowError(error.message));
    // }, []);

    //using async await method here and catching error using try and catch method

    // useEffect(() => {
    //     getApiData();
    // }, [])
    // const getApiData = async () => {
    //     try {
    //         const resp = await axios.get("http://localhost:3001/todos");
    //         setMyData(resp.data);
    //     } catch (error) {
    //         setShowError(error.message);
    //     }
    // }
    //new
    useEffect(() => {
        newDataFromApi();
    }, []);
    const newDataFromApi = async () => {
        try {
            const resp = await axios.get("http://localhost:3001/todos");
            setStore(resp.data);
        } catch (error) {
            setNewErr(error.message);
        }
    };
    let deleteRow = (id) => {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: "DELETE",
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
            });
        });
    };
    let GetValue = () => {
        let data = { title };
        fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((result) => {
            console.log("Result >", result);
        });
    };
    return (
        <>
            <div className=" container ">
                <input
                    type="text"
                    placeholder="text here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* <input
                    type="text"
                    placeholder="body here"
                    value={thebody}
                    onChange={(e) => setThisbody(e.target.value)}
                /> */}
                <button onClick={GetValue}>Add</button>
            </div>
            {store.slice(0, 10).map((elem, ind) => {
                return (
                    <div className="container">
                        <div className="row d-flex justify-content-around mx-5 py-1 bg-secondary ">
                            <div className="col-8 bg-white rounded" key={elem.id}>
                                <p width="50%">
                                    {" "}
                                    {elem.id} . {elem.title}{" "}
                                </p>
                                {/* <p>{elem.it}</p> */}
                                {/* <p>{elem.body}</p> */}
                            </div>
                            <button
                                className="col-1 rounded bg-danger text-white border-0"
                                width="50%"
                                onClick={() => deleteRow(elem.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
export default FetchApi;

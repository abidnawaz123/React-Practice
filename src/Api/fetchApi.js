import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const FetchApi = () => {
    const [store, setStore] = useState([]);
    const [newErr, setNewErr] = useState("");
    const [title, setTitle] = useState("");

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

    let deleteRow = async (id) => {
        let res = await axios.delete(`http://localhost:3001/todos/${id}`, {
            method: "DELETE",
        })
        newDataFromApi();
    }

    let GetValue = async () => {
        let data = { title };
        // axios.post(url, data // here data must be object)

        let resp = await axios.post("http://localhost:3001/todos", data)
        setTitle(resp.data.title);
        newDataFromApi();

    };
    let UpdateRow = async (elem, title, id) => {
        const datas = {
            title: title
        }
        setTitle(datas.title);
        console.log(datas.title);
        let res = await axios.put(`http://localhost:3001/todos/${id}`, { datas }, {
            method: "PUT",
        })
        const index = title.findIndex((item) => item.id === id);
        title[index] = res.title.title;
    }
    // const saveData = async () => {
    //     const title = data1;
    //     const result = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { title })
    //     const index = data.findIndex((item) => item.id === id);
    //     data[index] = result.data.title;
    //     setData1('')
    //     handleClose1()
    // }


    //Informational responses (100–199)
    //Successful responses (200–299)
    //Redirects (300–399)
    //Client errors (400–499)
    //Server errors (500–599)

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
            {store.map((elem, ind) => {
                return (
                    <div className="container">
                        <div className="row d-flex justify-content-around mx-5 py-1 bg-secondary ">
                            <div className="col-8 bg-white rounded" key={elem.id}>
                                <p width="50%"> {elem.id + 1} . {elem.title} </p>
                            </div>
                            <button
                                className="col-1 rounded bg-danger text-white border-0"
                                width="50%"
                                onClick={() => deleteRow(elem.id)}
                            >
                                Delete
                            </button>
                            <button
                                className="col-1 rounded bg-success text-white border-0"
                                width="50%"
                                onClick={() => UpdateRow(elem.ind, elem.title)}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
export default FetchApi;

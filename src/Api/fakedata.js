 //     fetch(`http://localhost:3001/todos/${id}`, {
    //         method: "DELETE",
    //     }).then((result) => {
    //         result.json().then((resp) => {
    //             console.log(resp);
    //             newDataFromApi();
    //         });
    //     });
    // };
    // let deleteRow = (id) => {
    //     fetch(`http://localhost:3001/todos/${id}`, {
    //         method: "DELETE",
    //     }).then((result) => {
    //         result.json().then((resp) => {
    //             console.log(resp);
    //             newDataFromApi();
    //         });
    //     });
    // };
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









    //     fetch("http://localhost:3001/todos", {
        //         method: "POST",
        //         headers: {
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(data),
        //     }).then((result) => {
        //         console.log("Final Result >", result);
        //         newDataFromApi();
        //     });
        // };
        // let GetValue = () => {
        //     let data = { title };
        //     fetch("http://localhost:3001/todos", {
        //         method: "POST",
        //         headers: {
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(data),
        //     }).then((result) => {
        //         console.log("Final Result >", result);
        //         newDataFromApi();
        // });
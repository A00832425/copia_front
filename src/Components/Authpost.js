import React, { useState } from 'react';
import Axios from 'axios';

function Authpost(){
    const url ="https://edbapi.azurewebsites.net/api/user";
    const [data,setData]=useState({
        name: "",
        id: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            idy: data.idy
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="email" type = "text" ></input>
                <input onChange={(e)=>handle(e)} id="idy" value={data.idy} placeholder="idy" type = "number" ></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Authpost;
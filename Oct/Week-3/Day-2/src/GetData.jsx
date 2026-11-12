import React, { useEffect, useState } from 'react'
import axios from "axios"

function GetData() {

    const [users,setUsers]=useState([]);
    let getUser=async()=>{
        try {
            // let res=await fetch("https://jsonplaceholder.typicode.com/users");
            // let data=await res.json();

            // console.log(data);

            let res=await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(res.data)
            setUsers(res.data)
        } catch (error) {
            console.log("This is the error",error);
        }
    }

    useEffect(()=>{
        getUser()
    },[])
  return (
    <div>
      Get data
      <ul>
      {
        users.map((user)=>(
            <li>
                {user.name}
            </li>
        ))
      }
      </ul>
    </div>
  )
}

export default GetData

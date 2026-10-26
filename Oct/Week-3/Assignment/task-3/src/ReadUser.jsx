
import axios from "axios";
import React, { useEffect, useState } from "react";

function ReadUser() {
  const [users, setUsers] = useState([]);

  let getUsers = async () => {
    try {
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.log("This is error", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Read Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default ReadUser;

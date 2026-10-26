
import axios from "axios";
import React, { useEffect } from "react";

function CreateUser() {
  let createUser = async () => {
    try {
      let res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "Hello",
          username: "hello30",
          email: "hello@gmail.com"
        }
      );

      console.log("User Created:", res.data);
    } catch (error) {
      console.log("This is error", error);
    }
  };

  useEffect(() => {
    createUser();
  }, []);

  return (
    <div>
      <h2>Create User</h2>
      <p>Check the console for the response.</p>
    </div>
  );
}

export default CreateUser;

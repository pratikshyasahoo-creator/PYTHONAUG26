
import axios from "axios";
import React, { useEffect } from "react";

function DeleteUser() {
  let deleteUser = async () => {
    try {
      let res = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      console.log("User Deleted:", res.data);
      console.log("Status Code:", res.status);
    } catch (error) {
      console.log("This is error", error);
    }
  };

  useEffect(() => {
    deleteUser();
  }, []);

  return (
    <div>
      <h2>Delete User</h2>
      <p>Check the console for the response.</p>
    </div>
  );
}

export default DeleteUser;

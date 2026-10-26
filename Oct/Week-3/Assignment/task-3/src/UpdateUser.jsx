
import axios from "axios";
import React, { useEffect } from "react";

function UpdateUser() {
  let updateUser = async () => {
    try {
      let res = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          id: 1,
          name: "Updated Name",
          username: "updateduser",
          email: "updated@gmail.com"
        }
      );

      console.log("User Updated:", res.data);
    } catch (error) {
      console.log("This is error", error);
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      <h2>Update User</h2>
      <p>Check the console for the response.</p>
    </div>
  );
}

export default UpdateUser;


import React from "react";
import { useParams, useSearchParams } from "react-router";

function User() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const city = searchParams.get("city");
  const course = searchParams.get("course");

  return (
    <div className="m-6 rounded-lg border p-6">
      <h1 className="mb-4 text-2xl font-bold">
        User Details
      </h1>

      <p><b>Path Parameter (ID):</b> {id}</p>

      <h2 className="mt-4 text-xl font-semibold">
        Query Parameters
      </h2>
  

      {[...searchParams.entries()].map(([key, value]) => (
        <p key={key}>
          <b>{key}:</b> {value}
        </p>
      ))}
    </div>
  );
}

export default User;
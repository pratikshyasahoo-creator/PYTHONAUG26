
import React from "react";
import { Link, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex gap-6 bg-blue-600 p-4 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Link to="/user/101?name=Sonali&city=Bhubaneswar&course=React">
        User Details
      </Link>

      <button
        onClick={() => navigate("/about")}
        className="rounded bg-white px-3 text-blue-600"
      >
        About
      </button>
    </nav>
  );
}

export default Navbar;
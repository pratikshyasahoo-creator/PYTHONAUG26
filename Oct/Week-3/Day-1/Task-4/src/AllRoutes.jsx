
import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  );
}

export default AllRoutes;
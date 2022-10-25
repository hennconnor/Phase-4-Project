import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import User from "./Pages/User"
import Restaurants from "./Pages/Restaurants"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
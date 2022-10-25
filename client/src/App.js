import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import User from "./Pages/User"
import Restaurants from "./Pages/Restaurants"
import Login from "./Pages/Login"

function App() {

  const [currentUser, setCurrentUser] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
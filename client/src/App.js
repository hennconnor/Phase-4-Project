import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar"
import RestaurantDetails from "./Pages/RestaurantDetails"
import Home from "./Pages/Home"
import User from "./Pages/User"
import Restaurants from "./Pages/Restaurants"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user))
      }
    });
  }, []);


  function handleLogin(user) {
    setCurrentUser(user);
  }

  function handleLogout() {
    setCurrentUser(null);
  }



  return (
    <div className="App">
      <NavBar user={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/user" element={<User user={currentUser} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} onLogout={handleLogout} user={currentUser} />} />
        <Route path="/signup" element={<Signup user={currentUser} setUser={handleLogin} />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails user={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/restaurants" > Restaurants</Link>
            <Link to="/user" > User</Link>
            <Link to="/login" > Login/Logout</Link>
            <Link to="/signup" > Create Account</Link>
        </div>
    )
}
export default NavBar;
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/restaurants" > Restaurant</Link>
            <Link to="/user" > User</Link>
            <Link to="/login" > Login</Link>
        </div>
    )
}
export default NavBar;
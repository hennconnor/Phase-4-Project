import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form>
                <label type="text" onChange={handleChange}>username:</label>
                <input placeholder="Type Username"></input>
                <label type="text">password:</label>
                <input type="password" placeholder="Type Password" onChange={handleChange}></input>
                <input type="submit" />
            </form>
        </div>
    )

}

export default LoginForm;
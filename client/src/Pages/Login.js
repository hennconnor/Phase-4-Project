import React, { useState, useEffect } from 'react'

function Login({ user, onLogin, onLogout }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault()

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) => r.json())
            .then((user) => onLogin(user))
    }


    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then((user) => onLogout(user))
    }

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome</p>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            )
                : (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label type="text" >username:</label>
                            <input
                                type="text"
                                id="username"
                                autoComplete="off"
                                placeholder="Type Username"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                            ></input>
                            <label type="text" >password:</label>
                            <input
                                type="password"
                                placeholder="Type Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                autoComplete="current-password"
                            ></input>

                            <button type="submit" >Login</button>

                        </form>
                    </div>)
            }</div>
    )
}
export default Login;
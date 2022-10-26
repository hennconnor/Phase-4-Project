import React, { useState } from 'react'

function Signup({ user }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image_url, setImage] = useState('')
    function handleSubmit(e) {
        e.preventDefault()

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, name, image_url }),
        })
            .then((r) => r.json())
            .then((user) => console.log(user))
    }


    return (
        <div>
            {user ? (
                <div>
                    <p>You Already have an account</p>
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

                            <label type="text" >name:</label>
                            <input
                                type="text"
                                placeholder="Type Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                autoComplete="off"
                            ></input>

                            <label type="text" >image url:</label>
                            <input
                                type="text"
                                placeholder="Type Image URL"
                                onChange={(e) => setImage(e.target.value)}
                                value={image_url}
                                autoComplete="off"
                            ></input>


                            <button type="submit" >Create Account</button>

                        </form>
                    </div>)
            }</div>
    )
}
export default Signup;
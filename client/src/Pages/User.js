import React, { useState, useEffect } from "react"

function User({ user }) {
    return (
        <div>
            {user ?
                <div>
                    <h1>{user.name}</h1>
                    {user.image_url ?
                        <img src={`${user.image_url}`} width='300' height='300' /> :
                        <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg" width='300' height='300' />}
                </div>

                :
                <div>
                    <p>Log in to view User Details</p>
                </div>
            }
        </div>
    )
}

export default User;
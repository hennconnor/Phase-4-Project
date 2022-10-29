import React, { useState, useEffect } from 'react'
import Restaurant from './Restaurants'
import pasta from '../assets/pasta.jpg'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

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
                    <>
                        <form onSubmit={handleSubmit}>
                           <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src={pasta} alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

                <MDBInput onChange={(e) => setUsername(e.target.value)}
                                value={username} wrapperClass='mb-4' label='username' id='form1'/>
                <MDBInput  onChange={(e) => setPassword(e.target.value)}
                                value={password} wrapperClass='mb-4' label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4"></div>

              <MDBBtn className="mb-4 w-100" onClick={handleSubmit}>Sign in</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
                        </form>
                    </>)
            }</div>
    )
}
export default Login;
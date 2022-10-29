import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit'

function Signup({ user, setUser }) {
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
            .then((newUser) => setUser(newUser))
    }


    return (
        <div>
            {user ? (
                <div>
                    <p>You are logged in as {user.name}</p>
                </div>
            )
                : (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput  onChange={(e) => setName(e.target.value)}
                                value={name} wrapperClass='mb-4' label='name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput onChange={(e) => setUsername(e.target.value)}
                                value={username} wrapperClass='mb-4' label='username' id='form3'/>
              <MDBInput onChange={(e) => setPassword(e.target.value)}
                                                    value={password} wrapperClass='mb-4' label='Password' id='form4' type='password' />
             <MDBInput onChange={(e) => setImage(e.target.value)}
                                value={image_url} wrapperClass='mb-4' label='Profile Picture URL' id='form4' type='text'/>

              

              <MDBBtn type="submit" className='w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">


              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
                        </form>
                    </div>)
            }</div>
    )
}
export default Signup;
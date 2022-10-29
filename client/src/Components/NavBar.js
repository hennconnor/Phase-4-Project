import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar({ user, onLogout, onLogin }) {
  
  function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then((user) => onLogout(user))
    }



    return (

        <>
      <Navbar bg="dark" variant="dark">
        <Container>
           <Navbar.Brand className="foodie" href="/">FOODIE</Navbar.Brand>
           <Nav className="me-auto">
           <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/restaurants">Restaurants</Nav.Link>
              {user ?
                <Nav.Link className="user-nav" href="/Login" onClick={handleLogout} >Logout</Nav.Link> : 
                <Nav.Link className="user-nav" href="/Login" >Login</Nav.Link>
                } 
              <Nav.Link href="/signup">Signup</Nav.Link>
           <Nav.Link className="user-nae" href="/User">User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
    )
}
export default NavBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Navigatio = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    // console.log("token",token)
    const name1 = localStorage.getItem('name');

      //--------------------handle logout-------------------------
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    navigate('/');
  }
  return (
    <div >
       <Navbar expand="lg" className="bg-body-tertiary" className='nav'>
      <Container>
        <Navbar.Brand > {name1===null || name1 === undefined? "" : <b>{name1}</b>}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#link"> {name1===null || name1 === undefined? "" : <b>Welcome {name1}</b>}</Nav.Link> */}
       
       {/* {loginName === "" || loginName === undefined ? */}
         {name1===null || name1 === undefined  ?
          <Link to="/"> 
         
            {/* <dfn title="Login/Signup"> 
              <a href="login.html">Login/Signup </a>
            </dfn>  */}
          </Link>
          : <button onClick={handleLogout} className='navbtn'>Logout</button>
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigatio

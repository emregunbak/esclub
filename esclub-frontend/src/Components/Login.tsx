import { Button } from "reactstrap";
import Form from "react-bootstrap/Form";
import { Container, Card } from "react-bootstrap";
import Logo from "./img/logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
  const[userName,setUserName]=useState<any>();
  const[password,setPassword]=useState<any>();
  const navigate = useNavigate();
  const handleLogin=async ()=>{
    await axios.post("session_url", {}, {
      auth: {
        username: userName,
        password: password
      }
    }).then(function(response) {
      navigate('/home');
    }).catch(function(error) {
      alert('Error on Authentication');
    });

  }
  return (
    <Card style={{ width: "30rem", margin: "auto" }} border="danger">
      {/* <Card.Img variant="top" src="esclub-frontend/src/Components/img/logo.png" /> */}
      <a href="LandingPage">
        <img
          src={Logo}
          alt="Es Club"
          style={{ width: "10rem", display: "block", margin: "auto" }}
        />
      </a>
      <Container className="d-grid h-100 w-75 py-2">
        <h1 className="text-center">Login</h1>
        <Form className="p-3 w-100">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" onChange={(e)=>setUserName(e.target.value)}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
        </Form>
        
          <Button type="submit" onClick={()=>handleLogin()}>Login</Button>


        <a href="Register" className="m-3 text-decoration-none">
          Don't have an account yet?
        </a>
      </Container>
    </Card>
  );
}

export default Login;

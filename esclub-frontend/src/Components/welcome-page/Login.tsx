import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../img/logo.png";
import "../../style/welcome-page.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getResponse } from "../../feature/responseSlice";

function Login() {
  const dispatch = useDispatch();
  const [responseData, setResponseData] = useState("");

  const [userName, setUserName] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [token, setToken] = useState<any>();
  const navigate = useNavigate();
  const handleLogin = async () => {
    await axios
      .post(
        "http://localhost:8080/api/v1/auth/login",
        { username: userName, password: password },
        {
          auth: {
            username: userName,
            password: password,
          },
        }
      )
      .then(function (response) {
        setToken(response.data.accessToken);
        navigate("/home");
        dispatch(
          getResponse({
            response,
          })
        );
      })
      .catch(function (error) {
        alert("Error on Authentication");
      });
  };

  return (
    <>
      <style type="text/css">
        {`
    .btn-danger {
      background-color:#8E1916;
      color: white;
      font-weight: bold;
      border: none;
    }
    .btn-outline-danger{
      background-color:white;
      color:#8E1916;
      font-weight: bold;
      border: none;
    }
    `}
      </style>
      <Form className="content">
        <Form.Group>
          <Form.Text>
            <h1>Log In</h1>
          </Form.Text>

          <Form.Group id="fInput">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form.Group>

        <Button
          variant="danger"
          className="btnLogin"
          onClick={() => handleLogin()}
        >
          Login
        </Button>
      </Form>

      <a href="/" className="aLink">
        Back
      </a>
    </>
  );
}

export default Login;

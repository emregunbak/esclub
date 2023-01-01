import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../style/welcome-page.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserRegister() {
  const [username, setUsername] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [confirmPassword, setConfirmPassword] = useState<String>("");
  const navigate = useNavigate();

  const handleRegister = async (
    username: String,
    email: String,
    password: String
  ) => {
    axios
      .post("http://localhost:8080/api/v1/auth/register", {
        username: username,
        email: email,
        password: password,
        role: "USER",
      })
      .then(() => {})
      .catch((error) => {
        console.log("error", error);
      });
    navigate("/login"); //gecici cozum
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
      <Form
        className="content"
        onSubmit={() => handleRegister(username, email, password)}
      >
        <Form.Group>
          <Form.Text>
            <h1>User Register</h1>
          </Form.Text>

          <Form.Group id="fInput">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form.Group>

        <Button
          variant="danger"
          className="btnLogin"
          id="register"
          type="submit"
        >
          User Register
        </Button>
      </Form>
    </>
  );
}

export default UserRegister;

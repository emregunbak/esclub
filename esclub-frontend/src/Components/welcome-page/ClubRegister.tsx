import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import "../../style/welcome-page.css";
import axios from "axios";

function ClubRegister() {
  const [events, setAllEvents] = useState<any[]>();
  const [clubs, setAllClubs] = useState<any[]>();
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/events").then((response: any) => {
      setAllEvents(response.data);
    });
    axios.get("http://localhost:8080/api/v1/clubs").then((response: any) => {
      setAllClubs(response.data);
    });
    console.log(events);
    console.log(clubs);
  });
  return (
    <>
      <Form className="content">
        <Form.Text>
          <h1>Club Register</h1>
        </Form.Text>
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Clubs"
            menuVariant="light"
          >
          </NavDropdown>
        </Nav>
        <Form.Group>
          <Form.Group id="fInput">
            <Form.Label>chosen club name </Form.Label>
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <span className="clearfix"></span>
          <a href="login">
            <Button className="btnRegister" variant="danger">
              Club Register
            </Button>
          </a>
        </Form.Group>
      </Form>
    </>
  );
}

export default ClubRegister;

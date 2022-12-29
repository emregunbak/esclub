import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EsClubGif from "./img/EsClubGif.gif";

import "../style/welcome-page.css";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { Card, Container } from "react-bootstrap";

export default function LandingPage() {
  return (
    <>
      <style type="text/css">
        {`
    .navbar-light {
      background:linear-gradient(to right, #efefef 0%, #545354 50%)no-repeat 0 0 /200%;    }
    `}
      </style>
      <Card className="landing-page">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="text-es">
              ES CLUB
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="Register" className="nav-link">
                  <FiUser className="lgn-rgs" />
                  Login
                </Nav.Link>
                <Nav.Link href="Register">
                  <FiUserPlus className="lgn-rgs" />
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <img src={EsClubGif} alt="Es Club" className="esc-gif" />
      </Card>
    </>
  );
}

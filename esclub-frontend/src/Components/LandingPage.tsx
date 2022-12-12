import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EsClubGif from "./img/EsClubGif.gif";
import logo from "../Components/img/logo.png";

import "../style/welcome-page.css";
import { FiUser, FiUserPlus } from "react-icons/fi";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar variant="dark" className="fixed-top navbar-style">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="logo-s" alt="Logo" />
          </Navbar.Brand>
          <Nav variant="tabs" className="m-auto navbar-hover ">
            <Nav.Link
              href="Login"
              style={{
                color: "black",
              }}
            >
              <FiUser style={{ marginRight: "4px" }} />
              Login
            </Nav.Link>
            <Nav.Link href="Register" style={{ color: "black" }}>
              <FiUserPlus style={{ marginRight: "4px" }} />
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <img src={EsClubGif} alt="Es Club" className="esc-gif" />
      </Container>
    </div>
  );
}

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Gif from "./img/ESCLUB.gif";

function LandingPage() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <img
          src={Gif}
          alt="Es Club"
          style={{ width: "75rem", display: "block", margin: "auto" }}
        />
      </Container>
    </>
  );
}

export default LandingPage;

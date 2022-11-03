import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function LandingPage() {
    return (
      <>
<Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      </>
    );
  }
  
  export default LandingPage;
  
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function EsclubNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Esclub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="clubs">Clubs</Nav.Link>
            <Nav.Link href="events">Events</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default EsclubNavbar;

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Events() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Esclub</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="clubs">Clubs</Nav.Link>
        <Nav.Link href="events">Events</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
      <h1>
        Events
      </h1>
      </>
  );
}

export default Events;

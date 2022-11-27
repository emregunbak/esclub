import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function EsclubNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <Nav className="me-auto" style={{ marginLeft: "1200px" }}>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="clubs">Clubs</Nav.Link>
            <Nav.Link href="events">Events</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

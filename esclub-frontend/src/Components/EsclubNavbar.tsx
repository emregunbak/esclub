import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function EsclubNavbar() {
  return (
    <>
      <Navbar style={{ background: "#4E4E4E"}} variant="dark">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link href="home" style={{color:"white"}}>
             Home</Nav.Link>
            <Nav.Link href="clubs" style={{color:"white"}}>Clubs</Nav.Link>
            <Nav.Link href="events" style={{color:"white"}}>Events</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default EsclubNavbar;

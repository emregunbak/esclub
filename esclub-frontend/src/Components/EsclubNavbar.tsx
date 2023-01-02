import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/welcome-page.css";
import {useSelector} from "react-redux/es/hooks/useSelector";
import {RootState} from "../app/store";

function EsclubNavbar() {
  const count =  useSelector((state: RootState) =>state.response.value);
  return (
    <>
      <style type="text/css">
        {`
    .navbar-light {
      background:linear-gradient(to right, #efefef 0%, #545354 50%)no-repeat 0 0 /200%;    }
    `}
      </style>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="text-es">
            ES CLUB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/clubs" className="nav-link">
                Clubs
              </Nav.Link>
              <Nav.Link href="/events" className="nav-link">
                Events
              </Nav.Link>
              {count.data.userDto.role==="ADMIN"
                  ?<Nav.Link href="/admin" className="nav-link">
                    Admin
                  </Nav.Link> : null }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default EsclubNavbar;

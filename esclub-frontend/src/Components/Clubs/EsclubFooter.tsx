import * as React from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class EsclubFooter extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="danger" expand="lg" style={{ marginTop: "30px" }}>
          <Nav className="me-auto" style={{ margin: "auto" }}>
            {" "}
            © Microsoft {new Date().getFullYear()} Copyright: EsClub
          </Nav>
        </Navbar>
      </>
    );
  }
}

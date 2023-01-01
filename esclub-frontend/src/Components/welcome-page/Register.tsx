import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../style/welcome-page.css";
import React from "react";
import Logo from "../img/logo.png";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import { Row, Col, Container } from "react-bootstrap";
import UserRegister from "./UserRegister";
import ClubRegister from "./ClubRegister";
import classnames from "classnames";

export default class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab: any) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <div id="body">
        <Container id="container">
          <Nav tabs style={{ margin: "auto" }}>
            <Row>
              <Col className="page2 back">
                <Form className="content">
                  <Form.Group>
                    <a href="/">
                      <img src={Logo} alt="Es Club" style={{ width: "8rem" }} />
                    </a>
                    <h3>Welcome to Es Club</h3>
                    <p>Click for log-in</p>
                    <NavItem>
                      <Button
                        style={{ marginRight: "5px" }}
                        variant="outline-danger"
                        href="login"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-arrow-left-circle"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 8 8 12 12 16" />
                          <line x1="16" y1="12" x2="8" y2="12" />
                        </svg>
                        Login
                      </Button>
                    </NavItem>
                  </Form.Group>
                </Form>
              </Col>
              <Col className="registerClass">
                <UserRegister></UserRegister>
              </Col>
            </Row>
          </Nav>
        </Container>
      </div>
    );
  }
}

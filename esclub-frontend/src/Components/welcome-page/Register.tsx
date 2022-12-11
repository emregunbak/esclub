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
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col className="login">
                    <UserRegister></UserRegister>
                  </Col>
                  <Col className="page front">
                    <Form className="content">
                      <Form.Group>
                        <a href="/">
                          <img
                            src={Logo}
                            alt="Es Club"
                            style={{ width: "10rem" }}
                          />
                        </a>
                        <h3>Welcome to Es Club</h3>
                        <p>Click for club registration</p>
                        <NavItem>
                          <Button
                            variant="outline-danger"
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}
                          >
                            Club Register
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
                              className="feather feather-arrow-right-circle"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 16 16 12 12 8" />
                              <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                          </Button>
                        </NavItem>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col className="page back">
                    <Form className="content">
                      <Form.Group>
                        <a href="/">
                          <img
                            src={Logo}
                            alt="Es Club"
                            style={{ width: "10rem" }}
                          />
                        </a>
                        <h3>Welcome to Es Club</h3>
                        <p>Click for user registration</p>
                        <NavItem>
                          <Button
                            style={{ marginRight: "5px" }}
                            variant="outline-danger"
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}
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
                            User Register
                          </Button>
                        </NavItem>
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col className="registerClass">
                    <ClubRegister></ClubRegister>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Nav>
        </Container>
      </div>
    );
  }
}

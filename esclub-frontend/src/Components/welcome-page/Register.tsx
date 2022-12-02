import { Card } from "react-bootstrap";
<<<<<<< Updated upstream
import "../../style/Register.css";
=======
import "../../style/welcome-page.css";
>>>>>>> Stashed changes
import React from "react";

import UserRegister from "./UserRegister";
import ClubRegister from "./ClubRegister";
import clubImg from "../img/club.png";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Button,
  Row,
  Col,
} from "reactstrap";
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
      <div>
        <Card
          id="bckRegister"
          style={{
            width: "50rem",
            margin: "auto",
            marginTop: "50px",
            borderColor: "grey",
            borderStyle: "outset",
            borderWidth: "2.5px",
          }}
        >
          <Nav tabs style={{ margin: "auto" }}>
            <NavItem>
              <Button
                style={{ marginRight: "5px" }}
                color="danger"
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                User
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="danger"
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Club
              </Button>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <UserRegister></UserRegister>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <ClubRegister></ClubRegister>
                </Col>
                <Col sm="6">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={clubImg}
                      style={{
                        width: "384px",
                        height: "517px",
                        margin: "auto",
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Card>
      </div>
    );
  }
}

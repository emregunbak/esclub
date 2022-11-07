import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { allClubs } from "../constant/clubsData";
import Card from "react-bootstrap/Card";
import { announces } from "../constant/announceData";
import EsclubNavbar from "./EsclubNavbar";
import "../style/Home.css";
import { useState } from "react";

function Home() {
  const [deneme, setDeneme] = useState();
  const handleChange = () => {
    console.log("deneme");
  };

  return (
    <>
      <EsclubNavbar />

      <Row style={{ marginTop: "100px" }}>
        <Col sm="3" style={{ marginLeft: "80px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Header style={{ background: "black", color: "white" }}>
              All Clubs
              <input
              style={{marginLeft:"5px",width:"180px"}}
                onChange={handleChange}
                value={deneme}
                type="search"
                placeholder="Search"
              />
            </Card.Header>
            <ListGroup variant="flush">
              {allClubs.map((item) => {
                return (
                  <a href="" style={{ color: "black", textDecoration: "none" }}>
                    <li style={{ marginLeft: "40px" }}>{item.name}</li>
                  </a>
                );
              })}
            </ListGroup>
          </Card>
        </Col>
        <Col sm="7">
          {announces.map((item) => {
            return (
              <Card
                style={{
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    {" "}
                    <Image
                      src="https://ogrencikariyeri.com//AdminFiles/CMS/Content/wp-content/uploads/2018/01/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.png"
                      className="announce-pp"
                    ></Image>
                    {item.name}
                  </CardTitle>
                  <CardSubtitle className="mb-6 text-muted" tag="h6">
                    {item.fullName}
                  </CardSubtitle>
                  <CardText>{item.announce}</CardText>
                </CardBody>
              </Card>
            );
          })}
        </Col>
      </Row>
    </>
  );
}

export default Home;

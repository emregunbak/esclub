import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EsclubNavbar from "../EsclubNavbar";
import "../../style/Home.css";
import Lottie from "react-lottie";
import clubsPage from "../../LottieFiles/clubs.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allClubs } from "../../constant/clubsData";
function Clubs() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: clubsPage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [clubs, setClubs] = useState<any[]>([]);
  useEffect(() => {
    axios.get("").then((response: any) => {
      setClubs(response.data);
    });
  });
  let navigate = useNavigate();
  const routeChange = (deneme: string) => {
    let path = deneme;
    navigate(path);
  };

  return (
    <>
      <EsclubNavbar />
      <Row>
        <div>
          <div style={{ marginTop: "150px", marginLeft: "100px" }}>
            <h1
              style={{
                color: "#A62732",
                fontFamily: "sans-serif",
                fontWeight: "900",
              }}
            >
              Kulüpler Hakkında Her Şey
            </h1>
            <h5 style={{ fontFamily: "cursive" }}> Tek Sayfada Seninle</h5>
          </div>
        </div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={600}
          style={{ marginLeft: "800px", marginTop: "-200px" }}
        />
      </Row>
      <Row>
        {allClubs.map((item: any) => {
          return (
            <Col sm="4">
              <Card
                style={{
                  width: "25rem",
                  marginLeft: "60px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://ogrencikariyeri.com//AdminFiles/CMS/Content/wp-content/uploads/2018/01/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.png"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={() => routeChange("beng")}>See More</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Clubs;

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
    axios.get('http://localhost:8080/api/v1/clubs', ).then((response)=>{
      setClubs(response.data);
    })

    },[]);
  let navigate = useNavigate();
  const routeChange = (deneme: string) => {
    let path = deneme;
    navigate(path);
  };
console.log("deneme",clubs)
  return (
    <>
      <EsclubNavbar />
      <Row>
        <div>
          <div style={{ marginTop: "150px", marginLeft: "100px" }}>
            <h2
              style={{
                color: "#A62732",
                fontFamily: "sans-serif",
                fontWeight: "900",
              }}
            >
              Kulüpler Hakkında Her Şey
            </h2>
            <h5 style={{ fontFamily: "sans-serif" }}> Tek Sayfada Seninle</h5>
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
        {clubs.map((item: any) => {
          return (
            <Col sm="3">
              <Card
                style={{
                  width: "17rem",
                  marginLeft: "60px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  height:"480px",
                  marginTop:"10px"
                }}
              >
                <Card.Img
                    style={{height:"250px"}}
                  variant="top"
                  src={item.logo.imageURL
                }
                />
                <Card.Body>
                  <Card.Title>{item.clubName}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                </Card.Body>
                <Button style={{background:"darkred"}} onClick={() => routeChange(item.clubName)}>See More</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Clubs;

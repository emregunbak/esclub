import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EsclubNavbar from "../EsclubNavbar";
import "../../style/Home.css";
import Lottie from "react-lottie";
import clubsPage from "../../LottieFiles/clubs.json";
import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { useHref, useNavigate , useLocation} from "react-router-dom";
import { allClubs } from "../../constant/clubsData";
import { pathToFileURL } from "url";
import { NavItem } from "reactstrap";
import Club from "./Club";
import {EsclubFooter} from "../EsclubFooter";

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
                marginRight:"600px",
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
      <Row style={{ marginLeft:"75px", marginRight:"75px", marginTop: "100px"}} xs={1} md={4} className="g-4">
        {allClubs.map((item: any) => {
          item.description = item.description.slice(0,250);
          return (
            <Col style={{marginBottom:"100px"}} >
            <Card  style={{width: "16rem", height: "28rem", background: "white", color: "black" }}>
              <Card.Img style={{width: "254px", height: "13rem", background: "white", color: "black" }} variant="top" src={item.url} />
              <Card.Body>
                <Card.Title style={{fontSize:"15px",color: "darkred", marginRight:"18px"}}>{item.name}</Card.Title>
                <Card.Text style={{fontSize:"13px",width:"15rem"}}>
                  {item.description}
                </Card.Text>
                
              </Card.Body>
              <Button variant="primary" onClick={()=>routeChange(item.name)} style={{fontSize:"10px",border:"darkred", background: "darkred", color: "white", }}>See More</Button>
            </Card>
          </Col>
          );
        })}
      </Row>
      <EsclubFooter />
    </>
    
  );
  
}

export default Clubs;
import { Button, Col,Row } from "react-bootstrap";
import EsclubNavbar from "./EsclubNavbar";
import "../style/Clubs.css";
import Card from "react-bootstrap/Card";
import { clubsInfo } from "../constant/clubsInfo";
function Clubs() {
  const handleChange=(item:any)=>{
console.log("name",item)
  }

  return (
    <>
    <EsclubNavbar/>
    <Row style={{ marginLeft:"75px", marginRight:"75px", marginTop: "100px"}} xs={1} md={4} className="g-4">
      {clubsInfo.map((item:any) => (
        <Col style={{marginBottom:"100px"}} >
          <Card  style={{width: "16rem", height: "28rem", background: "white", color: "black" }}>
            <Card.Img style={{width: "254px", height: "13rem", background: "white", color: "black" }} variant="top" src={item.url} />
            <Card.Body>
              <Card.Title style={{fontSize:"13px",color: "darkred" }}>{item.name}</Card.Title>
              <Card.Text style={{fontSize:"11px",width:"15rem"}}>
                {item.description}
              </Card.Text>
              <Button href="infoClubs.tsx" onClick={(item)=>handleChange(item)} style={{fontSize:"8px",border:"darkred", background: "darkred", color: "white", }}>
                Read More
                </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default Clubs;

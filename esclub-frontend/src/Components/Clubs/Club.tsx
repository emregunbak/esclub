import { Row, Col, Image, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EsclubNavbar from "../EsclubNavbar";
import Lottie from "react-lottie";
import club from "../../LottieFiles/club.json";
import ClubBanner from "./ClubBanner";
import {useEffect, useState} from "react";
import axios from "axios";
import EditClubModal from "./EditClubModal";
import "../../style/partner.css";
function Club(props: any) {
  const { clubName } = useParams();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: club,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [oneClub,setOneClub]=useState<any>([])
    const [sponsor,setSponsor]=useState<any>([])
 useEffect(()=>{
  axios.get('http://localhost:8080/api/v1/clubs/details',
  )
      .then((res) => {
          setOneClub(res.data.filter((item: any)=>item.clubName===clubName)[0])
      })
      .catch((error) => {
        console.error(error)
      })
     axios.get('http://localhost:8080/api/v1/sponsors/getAll',
     )
         .then((res) => {
             console.log("response",res)
             setSponsor(res.data.filter((item: any)=>item.clubName===clubName))
         })
         .catch((error) => {
             console.error(error)
         })

 },[])
console.log("sponsor",sponsor)
  return (
    <>
    
      <EsclubNavbar />
      <Row>
        <ClubBanner/>
      </Row>
      <Row style={{ margin: "10px" }}>
        <Col sm="4">
          <Card.Img
              style={{height:"250px",width:"300px",marginLeft:"100px"}}
              variant="top"
              src={oneClub?.logo?.imageURL
              }
          />
        </Col>
        <Col sm="8">
          <h2>
            {" "}
            <b> {oneClub?.clubInfo?.title}</b>
          </h2>
          <p style={{fontSize:"18px"}}>
            {oneClub?.clubInfo?.description}
          </p> <EditClubModal name={oneClub?.clubInfo?.title
} description={oneClub?.clubInfo?.description} clubId={oneClub.id}/>
         
        </Col>
      </Row>
        <div id="logos-home-page">
            <div className="slider" style={{marginBottom:"150px", marginTop:"150px",marginLeft:"100px"}}>
                <div className="slide-track">
                    {sponsor.map((item:any)=>{
                        return(
                    <div className="slide"><img  src={item?.logo?.imageURL} alt="" width="188" height="60" /></div>)} )}
                </div>
            </div>
        </div>
    </>
  );
}

export default Club;

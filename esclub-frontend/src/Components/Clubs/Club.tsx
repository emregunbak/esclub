import { Row, Col, Image, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EsclubNavbar from "../EsclubNavbar";
import Lottie from "react-lottie";
import club from "../../LottieFiles/club.json";
import ClubBanner from "./ClubBanner";
import {useEffect, useState} from "react";
import axios from "axios";
import EditClubModal from "./EditClubModal";
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
 useEffect(()=>{
  axios.get('http://localhost:8080/api/v1/clubs/details',
  )
      .then((res) => {
          setOneClub(res.data.filter((item: any)=>item.clubName===clubName)[0])
      })
      .catch((error) => {
        console.error(error)
      })

 })

  const deneme = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti ab harum, numquam nobis expedita ratione repellendusblanditiis maxime totam cumque vel. Nostrum similique cumque ipsavoluptate, molestias quae. Neque vitae inventore architecto nostrumnumquam harum error aspernatur, voluptate, reiciendis perferendisofficia alias corporis eum nulla rerum, ipsum quibusdam doloreplaceat. Error maiores dolor ea totam, similique quas voluptatetempore voluptates. Cum eius, nam voluptatem facilis fugiatperferendis nemo ex accusantium modi est veniam iusto ipsa delectusquos, facere nobis iure! Repudiandae dicta id ab error. Suscipitsequi autem sint omnis? Quod itaque sunt cupiditate exercitationemillum voluptate ut eveniet laborum."
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
          <p>
            {oneClub?.clubInfo?.description}
          </p> <EditClubModal name={oneClub?.clubInfo?.title
} description={oneClub?.clubInfo?.description} clubId={oneClub.id}/>
         
        </Col>
      </Row>
    </>
  );
}

export default Club;

import { Row, Col, Image, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EsclubNavbar from "../EsclubNavbar";
import Lottie from "react-lottie";
import club from "../../LottieFiles/club.json";
import ClubBanner from "./ClubBanner";
import {useEffect, useState} from "react";
import axios from "axios";
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
  const [oneClub,setOneClub]=useState()
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/clubs', ).then((response)=>{
      setOneClub(response.data.filter((item: any)=> item.clubName===clubName)[0].logo.imageURL);

    })


  },[]);

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
              src={oneClub
              }
          />
        </Col>
        <Col sm="8">
          <h2>
            {" "}
            <b> {clubName}</b>
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti ab harum, numquam nobis expedita ratione repellendus
            blanditiis maxime totam cumque vel. Nostrum similique cumque ipsa
            voluptate, molestias quae. Neque vitae inventore architecto nostrum
            numquam harum error aspernatur, voluptate, reiciendis perferendis
            officia alias corporis eum nulla rerum, ipsum quibusdam dolore
            placeat. Error maiores dolor ea totam, similique quas voluptate
            tempore voluptates. Cum eius, nam voluptatem facilis fugiat
            perferendis nemo ex accusantium modi est veniam iusto ipsa delectus
            quos, facere nobis iure! Repudiandae dicta id ab error. Suscipit
            sequi autem sint omnis? Quod itaque sunt cupiditate exercitationem
            illum voluptate ut eveniet laborum.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Club;

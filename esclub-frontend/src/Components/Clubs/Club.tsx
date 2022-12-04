import { Row, Col, Image, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EsclubNavbar from "../EsclubNavbar";
import Lottie from "react-lottie";
import club from "../../LottieFiles/club.json";
import ClubBanner from "./ClubBanner";
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
  return (
    <>
      <EsclubNavbar />
      <Row>
        <ClubBanner/>
      </Row>
      <Row style={{ margin: "10px" }}>
        <Col sm="4">
          <Image
            style={{ width: "100%", borderRadius: "5px" }}
            src="https://ogrencikariyeri.com//AdminFiles/CMS/Content/wp-content/uploads/2018/01/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.png"
          ></Image>
        </Col>
        <Col sm="8">
          <h1>
            {" "}
            <b> {clubName}</b>
          </h1>
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

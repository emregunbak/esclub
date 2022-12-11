import { Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EsclubNavbar from "../EsclubNavbar";
import club from "../../LottieFiles/club.json";
import ClubBanner from "./ClubBanner";
import "../../style/Partner.css";
import {EsclubFooter} from "../EsclubFooter";



function Club(props: any) {
  
  const defaultOptions = {
    
    loop: true,
    autoplay: true,
    animationData: club,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { clubName}=useParams();
  console.log(clubName)
  
  return (
    <>
      <EsclubNavbar />
      <Row>
        <ClubBanner/>
      </Row>
      <Row style={{ margin: "10px" }}>
        
        <Col sm="4">
          <Image
            style={{ width: "100%", borderRadius: "550px",marginTop:"100px" }}
            src="https://ogrencikariyeri.com//AdminFiles/CMS/Content/wp-content/uploads/2018/01/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.png"
          ></Image>
        </Col>
        <Col sm="8">
          <h1>
            {" "}
            <b > </b>
          </h1>
          <p style={{marginTop:"100px"}}>
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
      <div id="logos-home-page">
	<div className="slider" style={{marginBottom:"150px", marginTop:"150px",marginLeft:"100px"}}>
		<div className="slide-track">
			<div className="slide"><img className="alignnone size-full wp-image-13024" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-wipro_logo.jpg" alt="" width="60" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13023" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-w.l.-gore-logo.jpg" alt="" width="110" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13022" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-visa.jpg" alt="" width="188" height="60" /></div>
      <div className="slide"><img className="alignnone size-full wp-image-13024" src="https://api.eestec.net/storage/public/images/partners/infineon.png" alt="" width="60" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13023" src="https://api.eestec.net/storage/public/images/partners/ifiso.png" alt="" width="110" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13022" src="https://api.eestec.net/storage/public/images/partners/metafox.png" alt="" width="188" height="60" /></div>
      <div className="slide"><img className="alignnone size-full wp-image-13024" src="https://api.eestec.net/storage/public/images/partners/estiem.png" alt="" width="60" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13023" src="https://api.eestec.net/storage/public/images/partners/best.png" alt="" width="110" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13022" src="https://api.eestec.net/storage/public/images/partners/ifiso.png" alt="" width="188" height="60" /></div>
      <div className="slide"><img className="alignnone size-full wp-image-13024" src="https://api.eestec.net/storage/public/images/partners/iaeste.png" alt="" width="60" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13023" src="https://api.eestec.net/storage/public/images/partners/swisscare.png" alt="" width="110" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13022" src="https://api.eestec.net/storage/public/images/partners/best.png" alt="" width="188" height="60" /></div>
      <div className="slide"><img className="alignnone size-full wp-image-13024" src="https://api.eestec.net/storage/public/images/partners/estiem.png" alt="" width="60" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13023" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-w.l.-gore-logo.jpg" alt="" width="110" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13022" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-visa.jpg" alt="" width="188" height="60" /></div>
      <div className="slide"><img className="alignnone size-full wp-image-13024" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-wipro_logo.jpg" alt="" width="60" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13023" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-w.l.-gore-logo.jpg" alt="" width="110" height="60" /></div>
			<div className="slide"><img className="alignnone size-medium wp-image-13022" src="https://api.eestec.net/storage/public/images/partners/ifiso.png" alt="" width="188" height="60" /></div>
		</div>
	</div>
</div>
<EsclubFooter />
    </>
  );
}

export default Club;
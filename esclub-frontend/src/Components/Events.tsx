import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import IEEE from "../IMG/ieeee.jpg";
import eestec from "../IMG/eestecs.jpg";
import ates from "../IMG/atess.jpg";
import evk from "../IMG/evk.jpg";
import reklam from "../IMG/Reklam.png";

function Events() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <a
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={reklam} alt="Reklam" />
        </a>
        <Container style={{ marginTop: "8px", justifyContent: "space-around" }}>
          <Container>
            <Carousel fade>
              <Carousel.Item
                style={{
                  backgroundImage: `url(${IEEE})`,
                }}
              >
                <img
                  className="d-block w-100"
                  src={IEEE}
                  alt="First slide"
                  style={{ height: "623px" }}
                />
                <Carousel.Caption>
                  <h3>IEEE</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundImage: `url(${eestec})` }}>
                <img
                  className="d-block w-100"
                  src={eestec}
                  alt="Second slide"
                  style={{ height: "623px" }}
                />

                <Carousel.Caption>
                  <h3>EESTEC</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundImage: `url(${ates})` }}>
                <img
                  className="d-block w-100"
                  src={ates}
                  alt="Third slide"
                  style={{ height: "623px" }}
                />

                <Carousel.Caption>
                  <h3>ATEŞ BÖCEĞİ KULÜBÜ</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundImage: `url(${evk})` }}>
                <img
                  className="d-block w-100"
                  src={evk}
                  alt="Forth slide"
                  style={{ height: "623px" }}
                />

                <Carousel.Caption>
                  <h3>ENDÜSTRİ VERİMLİLİK KULÜBÜ</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
        </Container>
        <a
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={reklam} alt="Reklam" />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <h2>Kulüpler için bilgi alanı</h2>
          <h4>Ieee</h4>
          <h4>Eestec</h4>
          <h4>Ateş</h4>
          <h4>Evk</h4>
        </div>
      </div>
    </div>
  );
}
export default Events;

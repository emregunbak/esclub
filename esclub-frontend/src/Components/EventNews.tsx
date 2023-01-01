import { Carousel, Container } from "react-bootstrap";
import IEEE from "../IMG/ieeee.jpg";
import eestec from "../IMG/eestecs.jpg";
import ates from "../IMG/atess.jpg";
import evk from "../IMG/evk.jpg";

function EventNews() {
  return (
    <>
      <Container className="slider">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="area-images d-block w-100 "
              src={IEEE}
              alt="First slide"
            />
            <Carousel.Caption>
              <h4>IEEE</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="area-images d-block w-100 "
              src={eestec}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h4>EESTEC</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="area-images d-block w-100 "
              src={ates}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4>Ateş Böceği Kulübü</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" area-images d-block w-100"
              src={evk}
              alt="Forth slide"
            />

            <Carousel.Caption>
              <h4>Endüstri Verimlilik Kulübü</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default EventNews;

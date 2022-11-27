import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import IEEE from "../IMG/ieeee.jpg";
import eestec from "../IMG/eestecs.jpg";
import ates from "../IMG/atess.jpg";
import evk from "../IMG/evk.jpg";
import reklam from "../IMG/Reklam.png";
import EsclubNavbar from "./EsclubNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import ListGroup from "reactstrap";
import Col from "reactstrap";
import Image from "react-bootstrap/Image";
import background from "../IMG/background.jpg";
import Register from "./Register";
import ieee2 from "../IMG/ieee2.jpg";
import eestec2 from "../IMG/eestec2.jpg";

function Events() {
  return (
    <>
      <link href="events.css" rel="stylesheet" />
      <EsclubNavbar />
      <div style={{ backgroundImage: `url(${background})` }}>
        <div
          style={{
            justifyContent: "center",
            width: "1280px",
            margin: "0 auto",
            backgroundColor: "white",
          }}
        >
          <h2
            style={{
              justifyContent: "space-around",
              marginLeft: "20px",
              paddingTop: "20px",
              color: "#444444",
            }}
          >
            EVENTS IN CAMPUS
          </h2>
          <div>
            <div
              style={{
                display: "",
                justifyContent: "space-around",
                height: "680px",
              }}
            >
              <div style={{ display: "flex" }}>
                <Dropdown>
                  <div
                    data-bs-spy="scroll"
                    data-bs-target="#list-example"
                    data-bs-offset="0"
                    className="scrollspy-example"
                    tabIndex={0}
                  >
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      style={{
                        marginTop: "5px",
                        backgroundColor: "#911D0E",
                        borderColor: "#911D0E",
                        justifyContent: "center",
                        width: "200px",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      CLUBS
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div
                        style={{
                          width: "400px",
                          height: "400px",
                          overflow: "scroll",
                        }}
                      >
                        <Dropdown.Item
                          href="#ieee"
                          className="nav-item nav-link"
                          style={{ marginLeft: "18px" }}
                        >
                          IEEE Eskişehir Teknik Üniversitesi Öğrenci Kolu Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#eestec"
                          className="nav-item nav-link"
                          style={{ marginLeft: "18px" }}
                        >
                          Avrupa Elektrik Mühendisliği Öğrencileri Kulübü
                          (EESTEC)
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Ateş Böceği Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                          Çevre ve Sürdürülebilirlik Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          Dans Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-6">
                          Endüstri ve Verimlilik Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-7">
                          Erasmus Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-8">
                          ESTÜ Espor Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-9">
                          Fotoğrafçılık Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-10">
                          IAESTE Öğrenci Komitesi Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-11">
                          Kariyer ve Girişimcilik Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-12">
                          Kimya ve Teknolojileri Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-13">
                          Motorsporları Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-14">
                          Radyo Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-15">
                          Rekreasyon ve Etkinlik Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-16">
                          Sanat Aktiviteleri Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-17">
                          Satranç ve Zeka Oyunları Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-18">
                          Savunma Sanayii ve Teknolojileri Kulübü (SASTEK)
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-19">
                          Sivil Havacılık Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-20">
                          Spor ve Yaşam Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-21">
                          Tasarım Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-22">
                          Veri Bilimi Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-23">
                          Ortak Alan Mekan Tasarımı ve Planlama Kulübü
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-24">
                          Yapı Kulübü
                        </Dropdown.Item>
                      </div>
                    </Dropdown.Menu>
                  </div>
                </Dropdown>
              </div>
              <Container
                style={{
                  justifyContent: "center",
                  paddingBottom: "50px",
                  marginTop: "30px",
                }}
              >
                <Container style={{ width: "1000px" }}>
                  <Carousel fade className="mw-0">
                    <Carousel.Item style={{}}>
                      <img
                        className="d-block w-100"
                        src={IEEE}
                        alt="First slide"
                        style={{
                          height: "500px",
                          borderRadius: "20px",
                        }}
                      />
                      <Carousel.Caption>
                        <h4>IEEE</h4>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{}}>
                      <img
                        className="d-block w-100"
                        src={eestec}
                        alt="Second slide"
                        style={{ height: "500px", borderRadius: "20px" }}
                      />

                      <Carousel.Caption>
                        <h4>EESTEC</h4>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{}}>
                      <img
                        className="d-block w-100"
                        src={ates}
                        alt="Third slide"
                        style={{ height: "500px", borderRadius: "20px" }}
                      />

                      <Carousel.Caption>
                        <h4>ATEŞ BÖCEĞİ KULÜBÜ</h4>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{}}>
                      <img
                        className="d-block w-100"
                        src={evk}
                        alt="Forth slide"
                        style={{ height: "500px", borderRadius: "20px" }}
                      />

                      <Carousel.Caption>
                        <h4>ENDÜSTRİ VERİMLİLİK KULÜBÜ</h4>
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
              ></a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          <div
            className="ieee"
            id="ieee"
            style={{ backgroundColor: "#4B4B4B" }}
          >
            <h2
              style={{
                width: "80px",
                marginLeft: "10px",
                color: "white",
                padding: "10px",
              }}
            >
              IEEE
            </h2>
            <p
              style={{
                margin: "10px",
                color: "#8F8F8F",
                borderLeft: "3px solid gray",
                padding: "5px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              reprehenderit placeat, harum, voluptatibus quasi dicta voluptatum
              minus cumque culpa debitis earum! Rem officiis tempora aperiam
              rerum eum quo placeat molestiae! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Exercitationem cum deserunt vel
              dolore, sapiente nihil voluptate quisquam aliquam provident vitae
              harum maiores quod, molestiae impedit ipsam illo illum iure
              expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum nihil quas ab earum excepturi consequuntur sequi debitis
              dolor eius est aperiam praesentium corporis ipsum rerum facere,
              maxime odio repudiandae animi!
            </p>
            <div style={{ display: "flex" }} className="eestec" id="eestec">
              <img
                className="d-block w-50"
                src={ieee2}
                alt="ieee2"
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  borderRadius: "20px",
                }}
              ></img>
              <p
                style={{
                  color: "#8F8F8F",
                  borderRight: "3px solid gray",
                  margin: "10px",
                  marginTop: "130px",
                  marginBottom: "130px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                tempore adipisci mollitia cumque voluptatibus unde quisquam
                libero dolores, veniam nulla sunt voluptate dolorem ut
                aspernatur culpa totam delectus. Deserunt, eos! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Beatae ratione
                molestiae commodi placeat aliquam nisi alias! Illum vel
                cupiditate totam, quod, cumque eos quibusdam praesentium atque
                et quos, veniam nihil! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Natus aperiam fugit magni consequuntur neque
                sint aliquam similique molestiae! Veniam, natus molestias cumque
                maxime temporibus facilis quaerat id tempore recusandae
                corrupti.
              </p>
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <h2
              style={{
                width: "80px",
                marginLeft: "10px",
                color: "#444444",
                padding: "10px",
              }}
            >
              EESTEC
            </h2>
            <p
              style={{
                margin: "10px",
                color: "#8F8F8F",
                borderLeft: "3px solid gray",
                padding: "5px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              reprehenderit placeat, harum, voluptatibus quasi dicta voluptatum
              minus cumque culpa debitis earum! Rem officiis tempora aperiam
              rerum eum quo placeat molestiae! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Exercitationem cum deserunt vel
              dolore, sapiente nihil voluptate quisquam aliquam provident vitae
              harum maiores quod, molestiae impedit ipsam illo illum iure
              expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum nihil quas ab earum excepturi consequuntur sequi debitis
              dolor eius est aperiam praesentium corporis ipsum rerum facere,
              maxime odio repudiandae animi!
            </p>
            <div style={{ display: "flex" }}>
              <img
                className="d-block w-50"
                src={eestec2}
                alt="eestec2"
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  borderRadius: "20px",
                }}
              ></img>
              <p
                style={{
                  color: "#8F8F8F",
                  borderRight: "3px solid gray",
                  margin: "10px",
                  marginTop: "130px",
                  marginBottom: "130px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                tempore adipisci mollitia cumque voluptatibus unde quisquam
                libero dolores, veniam nulla sunt voluptate dolorem ut
                aspernatur culpa totam delectus. Deserunt, eos! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Beatae ratione
                molestiae commodi placeat aliquam nisi alias! Illum vel
                cupiditate totam, quod, cumque eos quibusdam praesentium atque
                et quos, veniam nihil! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Natus aperiam fugit magni consequuntur neque
                sint aliquam similique molestiae! Veniam, natus molestias cumque
                maxime temporibus facilis quaerat id tempore recusandae
                corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Events;

import Carousel from "react-bootstrap/Carousel";
import EsclubNavbar from "./EsclubNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import EventNews from "./EventNews";
import "../style/events.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { allClubs } from "../service/clubs";
import { ButtonGroup } from "react-bootstrap";
import event from "../LottieFiles/event.json";
import Lottie from "react-lottie";
import { EsclubFooter } from "../Components/Clubs/EsclubFooter";
import { Image } from "react-bootstrap";

function Events() {
  const [events, setAllEvents] = useState<any[]>();
  const [clubs, setAllClubs] = useState<any[]>();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: event,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/events").then((response: any) => {
      setAllEvents(response.data);
    });
    axios.get("http://localhost:8080/api/v1/clubs").then((response: any) => {
      setAllClubs(response.data);
    });
    console.log(events);
    console.log(clubs);
  });

  return (
    <>
      <div>
        <EsclubNavbar />

        <div className={"all-area"}>
          <div className={"slider-bcg"}>
            <h2 className="title">Kampüsteki Etkinlikler</h2>
            <div className={"clubs"}>
              <Dropdown as={ButtonGroup}>
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#list-example"
                  data-bs-offset="0"
                  className="scrollspy-example"
                  tabIndex={0}
                >
                  <Dropdown.Toggle
                    split
                    className={"db-toggle"}
                    variant="success"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "gray",
                      borderColor: "gray",
                    }}
                  >
                    CLUBS
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={"dropdown-scroll"}>
                    {allClubs.map((clubs) => (
                      <div className={"clubs-name-area"}>
                        <li className={"nav-item nav-link"}>
                          <Dropdown.Item href={`#${clubs.id}`}>
                            {clubs.name}
                          </Dropdown.Item>
                        </li>
                      </div>
                    ))}
                  </Dropdown.Menu>
                </div>
              </Dropdown>
            </div>
            <EventNews />
            <Lottie
              options={defaultOptions}
              width={600}
              style={{
                marginLeft: "700px",
                marginTop: "-620px",
              }}
            />
          </div>

          <div className="ieee">
            {allClubs.map((clubs) =>
              Number(clubs.id) % 2 == 0 ? (
                <Carousel id={clubs.id}>
                  <Carousel.Item className="passive carousel-item beng-bcg">
                    <Carousel.Caption style={{ marginBottom: "20px" }}>
                      <h1 className="events-name-area">{clubs.name}</h1>
                      <h3 className="events-title-area">{clubs.h2}</h3>
                      <p className="events-info-area">{clubs.p}</p>
                      <Image className="events-img-area" src={clubs.url} />
                      <Image className="events-img-area" src={clubs.url2} />
                      <p>{clubs.p2}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="passive carousel-item beng-bcg">
                    <Carousel.Caption style={{ marginBottom: "120px" }}>
                      <h1 className="events-name-area">{clubs.name}</h1>
                      <h3 className="events-title-area">{clubs.h3}</h3>
                      <p className="events-info-area">{clubs.p3}</p>
                      <Image className="events-img-area" src={clubs.url3} />
                      <Image className="events-img-area" src={clubs.url4} />
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="passive carousel-item beng-bcg">
                    <Carousel.Caption style={{ marginBottom: "30px" }}>
                      <h1 className="events-name-area">{clubs.name}</h1>
                      <h3 className="events-title-area">{clubs.h4}</h3>
                      <p className="events-info-area">{clubs.p4}</p>
                      <Image className="events-img-area" src={clubs.url5} />
                      <Image className="events-img-area" src={clubs.url6} />
                      <p>{clubs.p5}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              ) : (
                <Carousel id={clubs.id}>
                  <Carousel.Item className="passive carousel-item content-bcg">
                    <Carousel.Caption>
                      <h1 className="events-name-2-area">{clubs.name}</h1>
                      <h3 className="events-title-area">{clubs.h2}</h3>
                      <p className="events-info-area">{clubs.p}</p>
                      <p>{clubs.p2}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="passive carousel-item content-bcg">
                    <Carousel.Caption>
                      <h1 className="events-name-2-area">{clubs.name}</h1>
                      <h3 className="events-title-area">{clubs.h2}</h3>
                      <p className="events-info-area">{clubs.p}</p>
                      <p>{clubs.p2}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="passive carousel-item content-bcg">
                    <Carousel.Caption>
                      <h1 className="events-name-2-area">{clubs.name}</h1>
                      <h3 className="events-title-area">{clubs.h2}</h3>
                      <p className="events-info-area">{clubs.p}</p>
                      <p>{clubs.p2}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              )
            )}
          </div>
        </div>
        <EsclubFooter />
      </div>
    </>
  );
}

export default Events;

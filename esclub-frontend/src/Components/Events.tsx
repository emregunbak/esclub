import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import IEEE from "../IMG/ieeee.jpg";
import eestec from "../IMG/eestecs.jpg";
import ates from "../IMG/atess.jpg";
import evk from "../IMG/evk.jpg";
import EsclubNavbar from "./EsclubNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import background from "../IMG/background.jpg";
import ieee1 from "../IMG/ieee1.jpg";
import ieee2 from "../IMG/ieee2.jpg";
import ieee3 from "../IMG/ieee3.jpg";
import eestec2 from "../IMG/eestec2.jpg";
import renk1 from "../IMG/renk1.png";
import renk2 from "../IMG/renk2.png";
import eestec1 from "../IMG/eestec1.jpg";
import eestec3 from "../IMG/eestec3.jpg";

function Events() {
    return (
        <>
            <link href="events.css" rel="stylesheet"/>
            <EsclubNavbar/>
            <div style={{backgroundImage: `url(${background})`}}>
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
                            <div style={{display: "flex"}}>
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
                                                    style={{marginLeft: "17px"}}
                                                >
                                                    IEEE Eskişehir Teknik Üniversitesi Öğrenci Kolu Kulübü
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    href="#eestec"
                                                    className="nav-item nav-link"
                                                    style={{marginLeft: "17px"}}
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
                                <Container style={{width: "1000px"}}>
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
                                                style={{height: "500px", borderRadius: "20px"}}
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
                                                style={{height: "500px", borderRadius: "20px"}}
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
                                                style={{height: "500px", borderRadius: "20px"}}
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
                        style={{backgroundColor: "#4B4B4B", height: "680px"}}
                    >

                        <Carousel variant="dark">
                            <Carousel.Item className="passive carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={renk1}
                                    alt="First slide"
                                    style={{height: "680px"}}
                                />
                                <Carousel.Caption>
                                    <h2
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        Türk Havacılık ve Uzay Sanayi Geleceği
                                    </h2>
                                    <h4 style={{}}>IEEE - 26 October 2022</h4>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            borderLeft: "3px solid gray",
                                            padding: "5px",
                                            color: "gray",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Explicabo, alias accusamus facere vel, minus assumenda
                                        nostrum necessitatibus magni earum, corporis maiores!
                                        Placeat distinctio maiores qui quibusdam dignissimos
                                        blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Sint doloremque quasi amet a
                                        dicta exercitationem, dolore pariatur, dolores delectus
                                        aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                        nemo culpa! Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates tenetur tempore, id libero
                                        obcaecati dignissimos blanditiis quidem explicabo corporis
                                        ipsum voluptatem non nostrum, iste quas doloremque molestias
                                        a at sint!
                                    </p>
                                    <div style={{display: "flex"}}>
                                        <img
                                            src={ieee1}
                                            alt="ieee1"
                                            style={{
                                                height: "380px",
                                                width: "380px",
                                                borderRadius: "20px",
                                            }}
                                        ></img>
                                        <p
                                            style={{
                                                textAlign: "left",
                                                borderRight: "3px solid gray",
                                                padding: "10px",
                                                marginTop: "40px",
                                                color: "gray",
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Explicabo, alias accusamus facere vel, minus assumenda
                                            nostrum necessitatibus magni earum, corporis maiores!
                                            Placeat distinctio maiores qui quibusdam dignissimos
                                            blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sint doloremque quasi amet a
                                            dicta exercitationem, dolore pariatur, dolores delectus
                                            aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                            nemo culpa! Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Voluptates tenetur tempore, id libero
                                            obcaecati dignissimos blanditiis quidem explicabo corporis
                                            ipsum voluptatem non nostrum, iste quas doloremque
                                            molestias a at sint!
                                        </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="passive carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={renk1}
                                    alt="Second slide"
                                    style={{height: "680px"}}
                                />
                                <Carousel.Caption>
                                    <h2
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        Siber Güvenlik Eğitimi
                                    </h2>
                                    <h4 style={{}}>IEEE - 5-6 November 2022</h4>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            borderLeft: "3px solid gray",
                                            padding: "5px",
                                            color: "gray",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Explicabo, alias accusamus facere vel, minus assumenda
                                        nostrum necessitatibus magni earum, corporis maiores!
                                        Placeat distinctio maiores qui quibusdam dignissimos
                                        blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Sint doloremque quasi amet a
                                        dicta exercitationem, dolore pariatur, dolores delectus
                                        aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                        nemo culpa! Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates tenetur tempore, id libero
                                        obcaecati dignissimos blanditiis quidem explicabo corporis
                                        ipsum voluptatem non nostrum, iste quas doloremque molestias
                                        a at sint!
                                    </p>
                                    <div style={{display: "flex"}}>
                                        <img
                                            src={ieee2}
                                            alt="ieee2"
                                            style={{
                                                height: "380px",
                                                width: "380px",
                                                borderRadius: "20px",
                                            }}
                                        ></img>
                                        <p
                                            style={{
                                                textAlign: "left",
                                                borderRight: "3px solid gray",
                                                padding: "10px",
                                                marginTop: "40px",
                                                color: "gray",
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Explicabo, alias accusamus facere vel, minus assumenda
                                            nostrum necessitatibus magni earum, corporis maiores!
                                            Placeat distinctio maiores qui quibusdam dignissimos
                                            blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sint doloremque quasi amet a
                                            dicta exercitationem, dolore pariatur, dolores delectus
                                            aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                            nemo culpa! Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Voluptates tenetur tempore, id libero
                                            obcaecati dignissimos blanditiis quidem explicabo corporis
                                            ipsum voluptatem non nostrum, iste quas doloremque
                                            molestias a at sint!
                                        </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="passive carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={renk1}
                                    alt="First slide"
                                    style={{height: "680px"}}
                                />
                                <Carousel.Caption>
                                    <h2
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        Dijital Dönemde Çalışma İlişkilerinin Değişimi
                                    </h2>
                                    <h4 style={{}}>IEEE - 27 November 2022</h4>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            borderLeft: "3px solid gray",
                                            padding: "5px",
                                            color: "gray",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Explicabo, alias accusamus facere vel, minus assumenda
                                        nostrum necessitatibus magni earum, corporis maiores!
                                        Placeat distinctio maiores qui quibusdam dignissimos
                                        blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Sint doloremque quasi amet a
                                        dicta exercitationem, dolore pariatur, dolores delectus
                                        aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                        nemo culpa! Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates tenetur tempore, id libero
                                        obcaecati dignissimos blanditiis quidem explicabo corporis
                                        ipsum voluptatem non nostrum, iste quas doloremque molestias
                                        a at sint!
                                    </p>
                                    <div style={{display: "flex"}}>
                                        <img
                                            src={ieee3}
                                            alt="ieee3"
                                            style={{
                                                height: "380px",
                                                width: "380px",
                                                borderRadius: "20px",
                                            }}
                                        ></img>
                                        <p
                                            style={{
                                                textAlign: "left",
                                                borderRight: "3px solid gray",
                                                padding: "10px",
                                                marginTop: "40px",
                                                color: "gray",
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Explicabo, alias accusamus facere vel, minus assumenda
                                            nostrum necessitatibus magni earum, corporis maiores!
                                            Placeat distinctio maiores qui quibusdam dignissimos
                                            blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sint doloremque quasi amet a
                                            dicta exercitationem, dolore pariatur, dolores delectus
                                            aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                            nemo culpa! Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Voluptates tenetur tempore, id libero
                                            obcaecati dignissimos blanditiis quidem explicabo corporis
                                            ipsum voluptatem non nostrum, iste quas doloremque
                                            molestias a at sint!
                                        </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div
                        style={{display: "flex", height: "680px"}}
                        className="eestec"
                        id="eestec"
                    >
                        <Carousel variant="dark">
                            <Carousel.Item className="passive carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={renk2}
                                    alt="First slide"
                                    style={{height: "680px"}}
                                />
                                <Carousel.Caption>
                                    <h2
                                        style={{
                                            color: "#444444",
                                        }}
                                    >
                                        Tanışma Toplantısı
                                    </h2>
                                    <h4 style={{color: "black"}}>EESTEC - 13 October 2022</h4>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            borderLeft: "3px solid gray",
                                            padding: "5px",
                                            color: "gray",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Explicabo, alias accusamus facere vel, minus assumenda
                                        nostrum necessitatibus magni earum, corporis maiores!
                                        Placeat distinctio maiores qui quibusdam dignissimos
                                        blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Sint doloremque quasi amet a
                                        dicta exercitationem, dolore pariatur, dolores delectus
                                        aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                        nemo culpa! Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates tenetur tempore, id libero
                                        obcaecati dignissimos blanditiis quidem explicabo corporis
                                        ipsum voluptatem non nostrum, iste quas doloremque molestias
                                        a at sint!
                                    </p>
                                    <div style={{display: "flex"}}>
                                        <img
                                            src={eestec1}
                                            alt="eestec1"
                                            style={{
                                                height: "350px",
                                                width: "350px",
                                                borderRadius: "20px",
                                            }}
                                        ></img>
                                        <p
                                            style={{
                                                textAlign: "left",
                                                borderRight: "3px solid gray",
                                                padding: "10px",
                                                marginTop: "40px",
                                                color: "gray",
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Explicabo, alias accusamus facere vel, minus assumenda
                                            nostrum necessitatibus magni earum, corporis maiores!
                                            Placeat distinctio maiores qui quibusdam dignissimos
                                            blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sint doloremque quasi amet a
                                            dicta exercitationem, dolore pariatur, dolores delectus
                                            aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                            nemo culpa! Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Voluptates tenetur tempore, id libero
                                            obcaecati dignissimos blanditiis quidem explicabo corporis
                                            ipsum voluptatem non nostrum, iste quas doloremque
                                            molestias a at sint!
                                        </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className="passive carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={renk2}
                                    alt="First slide"
                                    style={{height: "680px"}}
                                />
                                <Carousel.Caption>
                                    <h2
                                        style={{
                                            color: "#444444",
                                        }}
                                    >
                                        ECS
                                    </h2>
                                    <h4 style={{color: "black"}}>EESTEC - 22 October 2022</h4>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            borderLeft: "3px solid gray",
                                            padding: "5px",
                                            color: "gray",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Explicabo, alias accusamus facere vel, minus assumenda
                                        nostrum necessitatibus magni earum, corporis maiores!
                                        Placeat distinctio maiores qui quibusdam dignissimos
                                        blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Sint doloremque quasi amet a
                                        dicta exercitationem, dolore pariatur, dolores delectus
                                        aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                        nemo culpa! Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates tenetur tempore, id libero
                                        obcaecati dignissimos blanditiis quidem explicabo corporis
                                        ipsum voluptatem non nostrum, iste quas doloremque molestias
                                        a at sint!
                                    </p>
                                    <div style={{display: "flex"}}>
                                        <img
                                            src={eestec2}
                                            alt="eestec2"
                                            style={{
                                                height: "350px",
                                                width: "350px",
                                                borderRadius: "20px",
                                            }}
                                        ></img>
                                        <p
                                            style={{
                                                textAlign: "left",
                                                borderRight: "3px solid gray",
                                                padding: "10px",
                                                marginTop: "40px",
                                                color: "gray",
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Explicabo, alias accusamus facere vel, minus assumenda
                                            nostrum necessitatibus magni earum, corporis maiores!
                                            Placeat distinctio maiores qui quibusdam dignissimos
                                            blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sint doloremque quasi amet a
                                            dicta exercitationem, dolore pariatur, dolores delectus
                                            aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                            nemo culpa! Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Voluptates tenetur tempore, id libero
                                            obcaecati dignissimos blanditiis quidem explicabo corporis
                                            ipsum voluptatem non nostrum, iste quas doloremque
                                            molestias a at sint!
                                        </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="passive carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={renk2}
                                    alt="First slide"
                                    style={{height: "680px"}}
                                />
                                <Carousel.Caption>
                                    <h2
                                        style={{
                                            color: "#444444",
                                        }}
                                    >
                                        Ülkeler Arası Yolculuk
                                    </h2>
                                    <h4 style={{color: "black"}}>EESTEC - 1 December 2022</h4>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            borderLeft: "3px solid gray",
                                            padding: "5px",
                                            color: "gray",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Explicabo, alias accusamus facere vel, minus assumenda
                                        nostrum necessitatibus magni earum, corporis maiores!
                                        Placeat distinctio maiores qui quibusdam dignissimos
                                        blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Sint doloremque quasi amet a
                                        dicta exercitationem, dolore pariatur, dolores delectus
                                        aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                        nemo culpa! Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates tenetur tempore, id libero
                                        obcaecati dignissimos blanditiis quidem explicabo corporis
                                        ipsum voluptatem non nostrum, iste quas doloremque molestias
                                        a at sint!
                                    </p>
                                    <div style={{display: "flex"}}>
                                        <img
                                            src={eestec3}
                                            alt="eestec3"
                                            style={{
                                                height: "350px",
                                                width: "350px",
                                                borderRadius: "20px",
                                            }}
                                        ></img>
                                        <p
                                            style={{
                                                textAlign: "left",
                                                borderRight: "3px solid gray",
                                                padding: "10px",
                                                marginTop: "40px",
                                                color: "gray",
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Explicabo, alias accusamus facere vel, minus assumenda
                                            nostrum necessitatibus magni earum, corporis maiores!
                                            Placeat distinctio maiores qui quibusdam dignissimos
                                            blanditiis. Sint, veniam! Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sint doloremque quasi amet a
                                            dicta exercitationem, dolore pariatur, dolores delectus
                                            aperiam at nemo totam veritatis quia! Ipsum dolor officiis
                                            nemo culpa! Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Voluptates tenetur tempore, id libero
                                            obcaecati dignissimos blanditiis quidem explicabo corporis
                                            ipsum voluptatem non nostrum, iste quas doloremque
                                            molestias a at sint!
                                        </p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;

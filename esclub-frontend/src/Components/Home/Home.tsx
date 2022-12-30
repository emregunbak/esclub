import { Button, Col, Image, ListGroup, Modal, Row } from "react-bootstrap";
import { Input } from "reactstrap";
import Card from "react-bootstrap/Card";
import EsclubNavbar from "../EsclubNavbar";
import "../../style/Home.css";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";
import {useSelector} from "react-redux/es/hooks/useSelector";
import { RootState } from "../../app/store";

function Home() {
   const count =  useSelector((state: RootState) =>state.response.value);
  const [filteredResults, setFilteredResults] = useState([] as any);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue: any) => {
    setSearchInput(searchValue);

    if (searchInput !== "") {
      const filteredData = clubs.filter((item: any) => {
        return Object.values(item)
            .join("")
            .toUpperCase()
            .includes(searchInput.toUpperCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(clubs);
    }
  };
  const [allAnnounces, setAllAnnounces] = useState<any[]>([]);
  const [clubs, setClubs] = useState<any[]>([]);
  const [filteredAnnounce, setFilteredAnnounce] = useState<any[]>([]);
  const handleAddAnnounce = async(e: any) => {
    if (e.key === "Enter") {
      await axios.post("http://localhost:8080/api/v1/announcements/create", { clubId: count.data.userDto.clubId,
        title: count.userName,
      body: e.target.value}, {

      }).then(function(response) {

        e.target.value=""
      }).catch(function(error) {
        alert('Error on Authentication');
      });

    }
  };
  const filterAnnounce = (name: any) => {
setFilteredAnnounce(allAnnounces.filter((item) => item.club.clubName === name))
  };
  const announceDelete = (name: any) => {
    axios.delete(`http://localhost:8080/api/v1/announcements/delete/${name.id}`)
        .then((res) => {

        })
        .catch((error) => {
          console.error(error)
        })
  };
  useEffect(() => {

    axios.get('http://localhost:8080/api/v1/clubs', )
        .then((res) => {
          setClubs(res.data)
        })
        .catch((error) => {
          console.error(error)
        })
    axios.get('http://localhost:8080/api/v1/announcements',
    )
        .then((res) => {
          setAllAnnounces(res.data.reverse())
        })
        .catch((error) => {
          console.error(error)
        })
  },[allAnnounces]);
  return (
      <>
        <EsclubNavbar />

        <Banner />
        <Row style={{ marginTop: "20px" }}>
          <Col sm="2" style={{ marginLeft: "80px" }}>
            <Card border="dark">
              <Card.Header style={{ background: "#A62732", color: "white" }}>
                <a onClick={()=>setFilteredAnnounce(allAnnounces)}>
                  All Clubs</a>
              </Card.Header>
              <ListGroup
                  variant="flush"
                  style={{ height: "400px", overflow: "auto" }}
              >
                <ListGroup.Item>
                  {" "}
                  <input
                      style={{ borderRadius: "5px" }}
                      placeholder="Search..."
                      onChange={(e) => searchItems(e.target.value)}
                  />
                  <FiSearch
                      size={20}
                      style={{ marginLeft: "-40px", marginTop: "-6px" }}
                  />
                </ListGroup.Item>
                {searchInput.length > 1
                    ? filteredResults.map((item: any) => {
                      return (
                          <ListGroup as="ul">
                            <ListGroup.Item style={{ fontSize: "12px" }}>
                              <a
                                  style={{ textDecoration: "none", color: "black" }}
                                  href="#"
                              >
                                <b>{item.clubName}</b>
                              </a>
                            </ListGroup.Item>
                          </ListGroup>
                      );
                    })
                    : clubs.map((item: any) => {
                      return (
                          <ListGroup as="ul">
                            <ListGroup.Item style={{ fontSize: "12px" }}>
                              <a
                                  style={{ textDecoration: "none", color: "black" }}
                                  onClick={() => filterAnnounce(item.clubName)}
                              >
                                <li>
                                  <b>{item.clubName}</b>
                                </li>
                              </a>
                            </ListGroup.Item>
                          </ListGroup>
                      );
                    })}
              </ListGroup>
            </Card>
          </Col>

          <Col sm="6">
              {count.data.userDto.role==="CLUB_ADMIN"
                  ?
                  <Card
                      border="primary"
                      style={{marginBottom: "50px", marginInline: "20px"}}
                  >
                      <Card.Header style={{background: "#A62732", color: "white"}}>
                          {" "}
                          <Image
                              src={clubs.filter((item)=> item.id===count.data.userDto.clubId)[0]?.logo.imageURL}
                              className="announce-pp"
                          ></Image>{" "}
                        {clubs.filter((item)=> item.id===count.clubId)[0]?.shortName
                        }
                      </Card.Header>
                      <Card.Body>
                          <Card.Title>
                              {" "}
                              <Input
                                  placeholder="Ne duyurmak istersin?"
                                  onKeyDown={(e: any) => handleAddAnnounce(e)}
                              ></Input>
                          </Card.Title>
                          <Card.Title>
                              <Button>
                                  <MdAddPhotoAlternate size={30} />
                                  Resim Ekle
                              </Button>
                          </Card.Title>
                      </Card.Body>
                  </Card>:null}
            {filteredAnnounce[0] ? filteredAnnounce.map((item : any)=>{
              return (
              <Card
              className="deneme"
              border="dark"
              style={{ marginBottom: "10px", marginInline: "20px" }}
              >
              <Card.Header style={{ backgroundColor: "#F0F0F0" }}>
              <Image src={item?.club.logo.imageURL} className="announce-pp"></Image>
            {item?.club.shortName+" - "+ item?.club.clubName}{count.data.userDto.role==="CLUB_ADMIN" && item.club.id===count.data.userDto.clubId? <AiFillDelete size={"18px"} style={{ marginLeft: "4px" }} onClick={()=>announceDelete(item)}/>: null}
              </Card.Header>
              <Card.Body>
              <Card.Title>
            {" "}

            {item?.name}

              </Card.Title>
              <Card.Text style={{fontSize:"16px"}}>{item?.body}</Card.Text>
              </Card.Body>
              </Card>)

            } ) : allAnnounces.map((item: any) => {
                return (
                    <Card
                        className="deneme"
                        border="dark"
                        style={{ marginBottom: "10px", marginInline: "20px" }}
                    >
                      <Card.Header style={{ backgroundColor: "#F0F0F0" }}>
                        <Image src={item?.club.logo.imageURL} className="announce-pp"></Image>
                        {item?.club.shortName+" - "+ item?.club.clubName}
                        {count.data.userDto.role==="CLUB_ADMIN" && item.club.id===count.data.userDto.clubId? <AiFillDelete size={"18px"} style={{ marginLeft: "4px" }} onClick={()=>announceDelete(item)}/>: null}
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          {" "}

                          {item?.name}

                        </Card.Title>
                        <Card.Text style={{fontSize:"16px"}}>{item?.body}</Card.Text>
                      </Card.Body>
                    </Card>
                )})

            }

          </Col>
          <Col sm="2">
            <Card
                border="dark"
                style={{ width: "18rem", marginLeft: "30px", height: "150px" }}
            >
              <Card.Header style={{ backgroundColor: "#A62732", color: "white" }}>
                EESTEC
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Bu ay en çok takipçi kazanan kulüp <b> 10</b>ile EESTEC oldu.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
                border="dark"
                style={{
                  width: "18rem",
                  marginLeft: "30px",
                  marginTop: "10px",
                  height: "150px",
                }}
            >
              <Card.Header style={{ backgroundColor: "#A62732", color: "white" }}>
                EESTEC
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Bu ay en çok etkinlik yapan <b>2</b> etkinlik ile EVK oldu.
                </Card.Text>
              </Card.Body>
            </Card>{" "}
            <Card
                border="dark"
                style={{
                  width: "18rem",
                  marginLeft: "30px",
                  marginTop: "10px",
                  height: "150px",
                }}
            >
              <Card.Header style={{ backgroundColor: "#A62732", color: "white" }}>
                EESTEC
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Bu ay bünyesine en çok sponsorluk ekleyen <b>3</b> sponsor ile
                  Kariyer oldu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>



  );
}

export default Home;
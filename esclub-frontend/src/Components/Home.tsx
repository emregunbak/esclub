import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Input } from "reactstrap";
import { allClubs } from "../constant/clubsData";
import Card from "react-bootstrap/Card";
import { announces } from "../constant/announceData";
import EsclubNavbar from "./EsclubNavbar";
import "../style/Home.css";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";

function Home() {
  const [filteredResults, setFilteredResults] = useState([] as any);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue: any) => {
    setSearchInput(searchValue);

    if (searchInput !== "") {
      const filteredData = allClubs.filter((item: any) => {
        return Object.values(item)
          .join("")
          .toUpperCase()
          .includes(searchInput.toUpperCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(allClubs);
    }
  };
  const [allAnnounces, setAllAnnounces] = useState(announces);
  const handleAddAnnounce = (e: any) => {
    if (e.key === "Enter") {
      const announce = [] as any;
      const obj = {
        name: "Deneme",
        fullName: "deneme",
        announce: e.target.value,
      };
      announce.push(obj);
      setAllAnnounces((old) => [...announce, ...old]);
      e.target.value = "";
    }
  };
  return (
    <>
      <EsclubNavbar />

      <Row style={{ marginTop: "100px" }}>
        <Col sm="3" style={{ marginLeft: "80px" }}>
          <Card border="dark" style={{ width: "18rem" }}>
            <Card.Header style={{ background: "#A62732", color: "white" }}>
              All Clubs
              <input
              style={{marginRight:"4px"}}
                placeholder="Search..."
                onChange={(e) => searchItems(e.target.value)}
              />
            </Card.Header>
            <ListGroup variant="flush">
              {searchInput.length > 1
                ? filteredResults.map((item: any) => {
                    return (
                      <a
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <li style={{ marginLeft: "40px" }}>{item.name}</li>
                      </a>
                    );
                  })
                : allClubs.map((item) => {
                    return (
                      <a
                        href=""
                        style={{ color: "black", textDecoration: "none",marginLeft:"10px" }}
                      ><FaCircle size={5} />
                        {item.name}
                      </a>
                    );
                  })}
            </ListGroup>
          </Card>
        </Col>
        <Col sm="7">
          <Card
            border="primary"
            style={{ width: "100%", marginBottom: "50px" }}
          >
            <Card.Header style={{ background: "#A62732", color: "white" }}>
              {" "}
              <Image
                src="https://ogrencikariyeri.com//AdminFiles/CMS/Content/wp-content/uploads/2018/01/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.png"
                className="announce-pp"
              ></Image>{" "}
              EESTEC
            </Card.Header >
            <Card.Body>
              <Card.Title>
                {" "}
                <Input
                  placeholder="Ne duyurmak istersin?"
                  onKeyDown={(e) => handleAddAnnounce(e)}
                ></Input>
              </Card.Title>
              <Card.Title>
                <Button>
                  <MdAddPhotoAlternate size={30} />
                  Resim Ekle
                </Button>
              </Card.Title>
            </Card.Body>
          </Card>
          {allAnnounces.map((item: any) => {
            return (

              <Card
              className="deneme"
                border="dark"
                style={{ width: "100%", marginBottom: "10px" }}
               
              >
                <Card.Header style={{backgroundColor:"#F0F0F0"}}>{item.fullName}</Card.Header>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Image
                      src={item.src}
                      className="announce-pp"
                    ></Image>
                    {item.name}
                  </Card.Title>
                  <Card.Text>{item.announce}</Card.Text>
                </Card.Body>
              </Card>

            );
          })}
        </Col>
      </Row>
    </>
  );
}

export default Home;

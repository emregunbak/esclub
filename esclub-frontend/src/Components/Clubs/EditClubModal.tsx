import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, InputGroup, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function EditClubModal(props: any) {
  console.log("props",props)
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [response, setResponse]= useState();
  const [deneme, setDeneme] = useState(true);
  const count =  useSelector((state: RootState) =>state.response.value);
  const handleSubmit = async () => {

    await axios.put(`http://localhost:8080/api/v1/clubs/create-club-info/${props.clubId}`, {
            title:name,
            description: description,
            summary:""


      }).then(function(response) {
        
      setDeneme(true)
      setShow(false)
      }).catch(function(error) {
        alert('Error on Authentication');
      });
  };
  return (
    
    <>
    {count.data.userDto.role==="ADMIN" ?<Button
        className="nextButton"
        style={{ backgroundColor: "#A62732" }}
        onClick={handleShow}
      >
        Edit Club
      </Button>: null }
    

      <Modal show={show} onHide={handleClose} size="lg">
     
        <Modal.Header closeButton>
          <Modal.Title>Edit Club</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Club Name</Form.Label>
            <Form.Control
              type="email"
              defaultValue={props.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Club Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              defaultValue={props.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

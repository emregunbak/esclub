import { Card, Container } from "react-bootstrap";
import { Button } from "reactstrap";
import Form from "react-bootstrap/Form";
import "../../style/Register.css";

function ClubRegister() {
  return (
    <>
      <Card id="clubRegister">
        <Container className="d-grid h-100 w-50">
          <Form className="p-3 w-100">
            <Form.Group>
              <h1 className="text-center"> Club Register</h1>
            </Form.Group>

            <Form.Group>
              <Form.Label>Club Name</Form.Label>
              <Form.Control type="text" placeholder="Club Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            {/* <Button variant="primary" type="submit">
  Submit
</Button> */}
          </Form>
          <a href="home" className="text-center mb-3">
            <Button>Register</Button>
          </a>
        </Container>
      </Card>
    </>
  );
}

export default ClubRegister;

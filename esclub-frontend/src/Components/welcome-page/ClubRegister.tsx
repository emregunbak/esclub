import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../style/welcome-page.css";

function ClubRegister() {
  return (
    <>
      <Form className="content">
        <Form.Text>
          <h1>Club Register</h1>
        </Form.Text>
        <Form.Group>
          <Form.Group id="fInput">
            <Form.Label>Club Name</Form.Label>
            <Form.Control type="text" placeholder="Club Name" required />
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <span className="clearfix"></span>
          <Button className="btnRegister" variant="danger">
            Club Register
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default ClubRegister;

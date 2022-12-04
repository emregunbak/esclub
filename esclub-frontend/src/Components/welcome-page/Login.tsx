import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../img/logo.png";
import "../../style/welcome-page.css";

function Login() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-danger {
      background-color:#8E1916;
      color: white;
      font-weight: bold;
      border: none;
    }
    .btn-outline-danger{
      background-color:white;
      color:#8E1916;
      font-weight: bold;
      border: none;
    }
    `}
      </style>
      <Container id="body">
        <Row id="container">
          <Col className="login">
            <Form className="content">
              <Form.Group>
                <Form.Text>
                  <h1>Log In</h1>
                </Form.Text>

                <Form.Group id="fInput">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group id="fInput">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Group>
              <a href="home">
                <Button variant="danger" className="btnLogin">
                  Login
                </Button>
              </a>
            </Form>

            <a href="/" className="aLink">
              Back
            </a>
          </Col>
          <Col className="page front">
            <Form className="content">
              <Form.Group>
                <img src={Logo} alt="Es Club" style={{ width: "10rem" }} />
                <h3>Welcome to Es Club</h3>
                <p>
                  Are you still not a member of ES CLUB where you can access all
                  clubs and events at Eskisehir Technical University?
                </p>
                <a href="Register">
                  <Button className="btnRegister" variant="outline-danger">
                    Register
                  </Button>
                </a>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;

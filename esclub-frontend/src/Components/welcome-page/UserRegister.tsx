import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../style/welcome-page.css";

function UserRegister() {
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
      <Form className="content">
        <Form.Group>
          <Form.Text>
            <h1>User Register</h1>
          </Form.Text>

          <Form.Group id="fInput">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group id="fInput">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
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
        </Form.Group>
        <a href="login">
          <Button variant="danger" className="btnLogin" id="register">
            User Register
          </Button>
        </a>
      </Form>
    </>
  );
}

export default UserRegister;

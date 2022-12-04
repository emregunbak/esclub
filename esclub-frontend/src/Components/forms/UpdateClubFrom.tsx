import EsclubNavbar from "../EsclubNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function UpdateClubFrom() {
    return (
        <>
            <EsclubNavbar/>

            <Container style={{marginTop:"60px"}}>
                <h1 className="display-4">Update Student Club</h1>
                <Row style={{marginTop:"20px"}}>
                    <Col sm={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formClubName">
                                <Form.Label>Club Name</Form.Label>
                                <Form.Control placeholder="Enter club name" />
                                <Form.Text className="text-muted">
                                    Enter your club name.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formShortName">
                                <Form.Label>Short Name</Form.Label>
                                <Form.Control placeholder="Enter short name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Logo</Form.Label>
                                <Form.Control placeholder="Enter short name" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default UpdateClubFrom;
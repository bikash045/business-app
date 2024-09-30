import {Row,Col, Form , Button } from "react-bootstrap";
const Forms = () => {
    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }} >First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" style={{ border: "2px solid #8F9399", background: "#f8f8fb" }} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }}>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" style={{ border: "2px solid #8F9399", background: "#f8f8fb" }} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" style={{ border: "2px solid #8F9399", background: "#f8f8fb", background: "#f8f8fb" }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }}>Mobile No</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile No" style={{ border: "2px solid #8F9399", background: "#f8f8fb" }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }}>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} type="text" style={{ border: "2px solid #8F9399", background: "#f8f8fb" }} />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 border-0" style={{ background: "#4d5fe3" }}> Submit</Button>
            </Form>
        </>
    );
}

export default Forms;
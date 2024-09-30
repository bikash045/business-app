import { Container, Row, Col } from "react-bootstrap";
import Forms from "../ContactUs/Forms";
import "../ContactUs/Contact.css"
const Auth = () => {
    return (
        <>
            <div style={{ backgroundColor: "#f8f8fb"}}>
                <Container className="w-50">
                    <Row >
                        <Col className="containermt">
                            <Forms />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Auth;
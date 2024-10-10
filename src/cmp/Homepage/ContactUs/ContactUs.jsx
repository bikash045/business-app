import { Row, Col, Card,Container } from "react-bootstrap";
import "../ContactUs/Contact.css"
import Forms from "./Forms";
import { Link } from "react-router-dom";
const ContactUs = () => {
    return (
        <>
            <div className="fonts p-3" style={{backgroundColor:"#f8f8fb"}}>
            <Container> 
                <div className="containermt p-2">
                <Row className="d-flex justify-content-between">
                <Col className="colmt " lg={4}>
                       <Card className="text-light border-0" style={{ backgroundImage: "linear-gradient(to  bottom,  #4d5fe3,#bad7fc)",height:"100%"}}>
                        <Card.Body className="text-start " >
                        <h3> Get in touch</h3>
                        <div className="d-flex flex-column"  >
                            <Link className="text-decoration-none text-light d-flex" to={"https://wa.me/7079210451"}>
                                <span ><i class="fa fa-whatsapp p-2 fs-3"  ></i></span>
                                <span className="fs-5 mt-2 font-weight-bold">+91 7079210451</span>
                            </Link>
                            <Link className="text-decoration-none text-light font-weight-bold" to={"mailto:vermabikash184@gmail.com"}>
                                <span><i class="fa fa-envelope p-2 fs-3" ></i></span>
                                <span className="fs-5  font-weight-bold">vermabikash184@gmail.com</span>
                            </Link>
                            <Link className="text-decoration-none text-light font-weight-bold" to={"https://instagram.com/bikash.045"}>
                                <span><i class="fa fa-instagram p-2 fs-3" ></i></span>
                                <span className="fs-5  font-weight-bold">bikash.045</span>
                            </Link>
                        </div>
                        </Card.Body>
                       </Card>
                    </Col>

                    <Col lg={7} className="colmt">
                        <Forms />
                    </Col>
                    </Row>
                </div>    
                    
                
                </Container>
            </div>
        </>
    );
}

export default ContactUs;
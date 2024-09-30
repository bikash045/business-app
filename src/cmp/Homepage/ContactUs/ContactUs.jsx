import { Row, Col, Card,Container } from "react-bootstrap";
import "../ContactUs/Contact.css"
import Forms from "./Forms";
import { Link } from "react-router-dom";
const ContactUs = () => {
    return (
        <>
            <div className="fonts" style={{backgroundColor:"#f8f8fb"}}>
            <Container>
                <Row > 
                <div className="containermt d-flex justify-content-evenly ">
                <Col className="colmt" lg={4}>
                       <Card className="text-light border-0" style={{ backgroundImage: "linear-gradient(to  bottom,  #4d5fe3,#bad7fc)",height:"100%"}}>
                        <Card.Body className="text-start " >
                        <h3> Get in touch</h3>
                        <div className="d-flex flex-column"  >
                            <Link className="text-decoration-none text-light d-flex">
                                <span ><i class="fa fa-whatsapp p-2 fs-3"  ></i></span>
                                <span className="fs-5 mt-2 font-weight-bold">7884552215</span>
                            </Link>
                            <Link className="text-decoration-none text-light font-weight-bold">
                                <span><i class="fa fa-envelope p-2 fs-3" ></i></span>
                                <span className="fs-5 mt-2 font-weight-bold">abcblog@gmail.com</span>
                            </Link>
                            <Link className="text-decoration-none text-light font-weight-bold">
                                <span><i class="fa fa-instagram p-2 fs-3" ></i></span>
                                <span className="fs-5 mt-2 font-weight-bold">techedu.120</span>
                            </Link>
                        </div>
                        </Card.Body>
                       </Card>
                    </Col>

                    <Col lg={6} className="colmt">
                        <Forms />
                    </Col>
                </div>    
                    
                </Row>
                </Container>
            </div>
        </>
    );
}

export default ContactUs;
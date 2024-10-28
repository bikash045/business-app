import { Card, Row, Col, Container } from "react-bootstrap";
import Courses from "../../json-api/Courses.json";
import "./Course.css"


const Course = () => {

    return (
        <>
           <div className="divmt p-2" style={{background:"#f8f8fb"}}>
           <Container>
                <Row>
                    {
                        Courses.map((item) => {
                            return (
                                <>
                                    <Col lg={3} className="mt-4">
                                    
                                        <Card className="border-0 shadow ">
                                            <Card.Body className="p-0" >
                                                <img
                                                    className="w-100 h-100 object-fit-cover rounded-top"
                                                    src={item.image}
                                                    alt="avatar"
                                                />
                                                <Card.Footer  style={{height:"95px"}} >
                                                    <h5>{item.title}</h5>
                                                    <h6>{item.cost}</h6>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            );

                        })
                    }

                </Row>
            </Container>
           </div>
        </>
    );
}
export default Course;
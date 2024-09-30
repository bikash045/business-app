import {
    Container,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
        window.scrollTo(0, 0);
    };



    return (
        <>
        <div className="p-5" style={{backgroundColor:"#f8f8fb"}}>
        </div>
            <div  style={{backgroundColor:"#031733"}}>
            <footer>
                <Container>
                    <Row>
                        <Col className="d-flex flex-wrap justify-content-between">
                            <div className="text-secondary">
                                <div className="mt-2">
                                    <Link to="/" onClick={handleLogoClick} >
                                        <img style={{ width: "20%" }} src="images/h-logo.png" alt="@logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2 d-flex" style={{ gap: "1vh" }}>
                                <div><Link to="https://github.com/bikash045" className="text-secondary fs-3" ><i className="fa fa-github"></i></Link></div>
                                <div><Link href=" https://www.linkedin.com/in/bikash-kumar-3a41a8277" className="text-secondary fs-3"><i className="fa fa-linkedin"></i></Link></div>
                                <div><Link href="https://www.instagram.com/bikash.045/#" className="text-secondary fs-3"><i className="fa fa-instagram"></i></Link></div>
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleLogoClick} style={{
                            background: "rgb(199 120 221)",
                            borderColor: "rgb(199 120 221)",
                            borderRadius: "0px",
                            padding: "1vh",
                            paddingLeft: "2vh",
                            paddingRight: "2vh",
                        }}>
                            <span>
                                <i class="fa fa-chevron-up"></i>
                            </span>
                        </Button>
                    </div>
                    <Row>
                        <Col xs={12} className="text-secondary text-center fonts  mt-4">
                            <div className="d-flex flex-column">
                                <span> Web designer and front-end developer</span>
                                <span className="mt-1">© Copyright 2024. Made by Bikash💖</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            </div>
        </>
    )
}

export default Footer;
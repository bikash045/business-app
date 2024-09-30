import "./Header.css";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../../json-api/menu.json";
import Brand from "../../json-api/Brand.json";

const NormalMenu = (data) => {
    const textColor = {
        color:"white"
    }
    const design = (
        <>
            <Link style={textColor} className={data.menuInfo.button ? " bg-primary nav-link btn btn-primary text-white px-3" : "nav-link "} to={data.menuInfo.url} >{data.menuInfo.lable}</Link>
        </>
    );
    return design; 
}

const Header = () => {
    const design = (
        <>
            <Navbar  expand="lg" className="py-3 border-bottom fixed-top " style={{background:"#10100F"}}>
                <Container>
                    <Link className="navbar-brand" to="/">
                      {/* <img src={Brand.logo} style={{height:"10vh" , width:"10vh"}} /> */}
                      </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end w-100">
                            {
                                Menu.map((data) => {
                                    return <NormalMenu  menuInfo={data} key={data.id} />
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
    return design;
}
export default Header;
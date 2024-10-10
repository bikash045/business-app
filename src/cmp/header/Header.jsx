import "./Header.css";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import Menu from "../../json-api/menu.json";
import Brand from "../../json-api/Brand.json";
import { useState,useEffect,useRef } from "react";

const NormalMenu = (data) => {
    const textColor = {
        color: "white"
    }
    const design = (
        <>
            <Link style={textColor} className={data.menuInfo.button ? " bg-primary nav-link btn btn-primary text-white px-3" : "nav-link "} to={data.menuInfo.url} >{data.menuInfo.lable}</Link>
        </>
    );
    return design;
}

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef(null);
    const menuIconRef = useRef(null);
    const navigate = useNavigate();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target) && !menuIconRef.current.contains(event.target)) {
            setIsNavOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogoClick = () => {
        navigate('/');
        setIsNavOpen(!isNavOpen);
    };



    const design = (
        <>
            <Navbar expand="lg" className=" border-bottom fixed-top " style={{ background: "#10100F" }}>
                <Container>
                    <Link className="navbar-brand" to="/">
                        <img
                            style={{ width: "100px" }}
                            src={Brand.logo}
                            alt="logo"
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <img className="w-100 text-light" src="images/menu_bar.png" alt="@logo" /> 
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end w-100">

                            {
                                Menu.map((data) => {
                                    return <NormalMenu menuInfo={data} key={data.id} />
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
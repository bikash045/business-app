import "./Header.css";
import {
    Navbar,
    Container,
    Nav
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../../json-api/menu.json";
import Brand from "../../json-api/Brand.json";
import { useState, useEffect, useRef } from "react";

const NormalMenu = ({ menuInfo }) => {
    const textColor = {
        color: "white"
    };
    return (
        <Link
            style={textColor}
            className={menuInfo.button ? "bg-primary nav-link btn btn-primary text-white" : "nav-link"}
            to={menuInfo.url}
        >
            {menuInfo.lable}
        </Link>
    );
}

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null); // Create a ref for the menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        // Add event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        // Cleanup listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <Navbar expand="lg" className="border-bottom fixed-top p-0" style={{ background: "linear-gradient(to right ,#41403d ,#2d2c29 )" }}>
            <Container fluid>
                <Link className="navbar-brand" to="/">
                    <img
                        style={{ width: "100px" }}
                        src={Brand.logo}
                        alt="logo"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
                    {
                        isMenuOpen ? <span className="fs-3 text-light">✖</span>
                        : <img className="w-100 text-light" src="images/menu.png" alt="@logo" />
                    }
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" ref={menuRef} in={isMenuOpen}>
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
    );
}

export default Header;

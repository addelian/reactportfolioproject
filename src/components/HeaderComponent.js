import React, { useState } from 'react';
import {
    Collapse,
    Container,
    Jumbotron,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <React.Fragment>
                <Jumbotron fluid className="mb-0">
                    <Container fluid>
                        <h1 className="display-3">Jake Genera</h1>
                        <p className="lead">"The only proof he needed for the existence of God was music." - <em>Kurt Vonnegut</em></p>
                    </Container>
                </Jumbotron>
                    <Navbar sticky light expand="md" id="header-nav">
                        <NavbarBrand href="/">..J.G..</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-music fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/newsfeed">
                                        <i className="fa fa-file fa-lg" /> News
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
            </React.Fragment>
        );
}

export default Header;
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
                        <h1 className="name display-1">Jake Genera</h1>
                        <p>"The only proof he needed for the existence of God was <span className="lead"><em>music.</em></span>" - <em>Kurt Vonnegut</em></p>
                    </Container>
                </Jumbotron>
                    <Navbar sticky light expand="md" id="header-nav">
                        <NavbarBrand href="/" className="name"><strong>J.G.</strong></NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/shows">
                                        <i className="fa fa-music fa-lg" /> Tour Dates
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/newsfeed">
                                        <i className="fa fa-file fa-lg" /> News
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
            </React.Fragment>
        );
}

export default Header;
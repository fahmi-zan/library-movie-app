import React, { Component } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../style/component.css";
import { Link } from "react-router-dom";

class navbar extends Component {
    render() {
        return <>
            <Navbar bg="dark" variant="dark" className='text-end'>
                <Container>
                    <Navbar.Brand className='text-decoration-none'><Link to="/" className='text-decoration-none text-reset'><h1>Library</h1>Movie</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" className='text-decoration-none text-reset'>Home</Link></Nav.Link>
                        <Nav.Link> <Link to="/favorite" className='text-decoration-none text-reset'>Favorite</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>;
    }
}

export default navbar;


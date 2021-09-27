import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useAuth } from '../Auth';
export default function Header(props) {

    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Inspiration">Inspiration</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Parties">Parties</Nav.Link>
                        <Nav.Link href="/Profile">Profile</Nav.Link>
                        <Nav.Link href="/About">About Us</Nav.Link>
                    </Nav>
                </Container>
                {user && (
                    <>
                        <button onClick={logout} className="w-20 h-6 text-center bg-green-700 rounded ">Logout</button>
                    </>
                )}
            </Navbar>

        </>
    );
}
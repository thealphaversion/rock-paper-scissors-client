import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

const Navigation = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Rock Paper Scissors</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="nickname">
                        Hi, &nbsp;<a href="#login">{props.name}</a>
                    </Navbar.Text>
                    {/*<Button variant="outline-info">Search</Button>*/}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;

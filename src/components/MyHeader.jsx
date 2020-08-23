import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../media/icon.jpg'

import '../css/MyHeader.css'

const MyHeader = (props) => {
    
    return (
        <div>
            <Navbar className="container" expand="sm" variant="light" bg="light" sticky="top">
                <Navbar.Brand href={process.env.PUBLIC_URL + "/"}> NBL{' '}
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href={process.env.PUBLIC_URL  + "/about"} className={props.active==="about" ? "active" : ""}>About</Nav.Link>
                    <Nav.Link href={process.env.PUBLIC_URL + "/schedule"} className={props.active==="schedule" ? "active" : ""}>Schedule</Nav.Link>
                    <NavDropdown title="Rosters" className={props.active==="rosters" ? "active" : ""}>
                        <NavDropdown.Item className="" href={process.env.PUBLIC_URL + "/team1"}>Team 1</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className={props.active==="statistics" ? "mr-auto active" : "mr-auto"} href={process.env.PUBLIC_URL + "/statistics"}>Statistics</Nav.Link>
                    <Nav.Link href={process.env.PUBLIC_URL + "/join"} className={props.active==="join" ? "active" : ""}>Join</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyHeader
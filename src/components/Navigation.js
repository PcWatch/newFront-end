import React from "react";
import Logout from "./Logout";
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../nav.css";
import Logo from "../images/traylogo.png";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <Navbar  light style={{ backgroundColor: '#f0ead2' }} className="navStuff">
          
          <Container>
            <img src={Logo} alt="Logo"/>
            <Navbar.Brand ></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/" to="/">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/Favorites"
                to="/Favorites"
                onClick={() => this.forceUpdate()}
              >
                Favorites
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/Shopping"
                to="/Shopping"
                onClick={() => this.forceUpdate()}
              >
                Shopping List
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/About"
                to="/About"
                onClick={() => this.forceUpdate()}
              >
                About Me
              </Nav.Link>
            </Nav>
            <Logout />
          </Container>
        </Navbar>
      </>
    );
  }
}
export default withAuth0(Navigation);

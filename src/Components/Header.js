import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function Header() {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">My Site</Navbar.Brand>
                    <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
                                <Nav.Link as={NavLink} to="/contact">Contacts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;

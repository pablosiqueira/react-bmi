import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
    return (
        <Navbar expand="lg" variant="dark" style={{'backgroundColor': '#40005d'}}>
          <Container >
            <Navbar.Brand href="#home">BMI - Body Mass Index Table</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-">
                  <NavDropdown title="Other Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://627d4de3b4a00e0380385306--tranquil-dodol-f7a208.netlify.app/">
                      React - Expenses List
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://pablo-node-mdb-shop-app.herokuapp.com/">
                      Mongo DB - Shopping Page
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://60cbad8625e2d700b0070082--frosty-kilby-621112.netlify.app/">
                      Vue w/VueX - Store
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://pablosiqueira.github.io/">
                      All Projects
                    </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="https://pablosiqueira.github.io/" target='_blank'>by Pablo Siqueira</Nav.Link>
              </Nav>
            </Navbar.Collapse>
           
          </Container>
        </Navbar>
      );
}

export default Navigation
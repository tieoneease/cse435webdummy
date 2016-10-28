import React from 'react'
import { 
  Navbar,
    Nav, 
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';

const st = {
  borderRadius: 0
}

const Header = ({ title }) => (
  <Navbar justified inverse style={st}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Home</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Documents</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Local Info</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  //<header>
  //<h1>{title}</h1>
  //</header>
)

export default Header

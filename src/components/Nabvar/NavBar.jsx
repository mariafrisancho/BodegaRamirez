import {Container, Nav, Navbar,NavDropdown}  from 'react-bootstrap'


const NavBar = () => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
 <Container> 
  <Navbar.Brand href="#home">Bodega Ramirez</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Historia</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Vinos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Piscos</NavDropdown.Item>
     
      </NavDropdown>
      <Nav.Link href="#pricing">Contactos</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Container> 
</Navbar>
  )
}
export default NavBar

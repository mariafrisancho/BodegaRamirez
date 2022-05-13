import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Logo } from '../CartWidget/Logo';
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    
      <Container>
 
        <Navbar.Brand href="#home">  <Logo /> </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Vinos</Nav.Link>
          <Nav.Link href="#pricing">Piscos</Nav.Link>
          <Nav.Link href="#pricing">Destilado</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}
export default NavBar

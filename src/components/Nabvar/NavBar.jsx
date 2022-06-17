import { useCartContext } from '../../Context/CartContext';
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Logo } from '../CartWidget/Logo';
import { Link, NavLink } from 'react-router-dom';




const NavBar = () => {
  const {cantidadTotal}=useCartContext()

  return (
   
 
    <Navbar bg="dark" variant="dark" >
    
      <Container>
      <Link to="/"><Logo /></Link>
      
        <Nav className="me-auto">
       
          <NavLink to='/categoria/VINOS'><button type="button" className="btn btn-dark">Vinos</button></NavLink>
          <NavLink to='/categoria/PISCO'><button type="button" className="btn btn-dark">Piscos</button></NavLink>
          <NavLink to='/categoria/DESTILADO'><button type="button" className="btn btn-dark">Destilado</button></NavLink>
        </Nav>
      
       {cantidadTotal()!==0 && cantidadTotal() }
        <CartWidget />
  
      </Container>
    </Navbar>
        
        
  )
}
export default NavBar

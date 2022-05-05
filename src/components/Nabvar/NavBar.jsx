import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
// import'./logo.png'
const NavBar = () => {
  return (
    <header classNameName="App-header">
     
    <nav>
  
      <ul>
      <li><a href="#" > Inicio</a></li>
      <li><a href="#">Quiénes somos</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Contacto</a></li>
      <CartWidget/>
    </ul>

    </nav>
    </header>
  )
}
export default NavBar

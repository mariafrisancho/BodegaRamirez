import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nabvar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import Cart from './components/Cart/Cart'
import CartContextProvider from './Context/CartContext';


function App() {



  return (
 
  
  
      <BrowserRouter>
     <CartContextProvider> 

        <div classNameName="App">

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer saludo='Bienvenidos a Vinos y Piscos Ramirez' />} />
            <Route path="/categoria/:id" element={<ItemListContainer saludo='Bienvenidos a Vinos y Piscos Ramirez' />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>

        </div>
        </CartContextProvider> 
      </BrowserRouter>
  
  )
}

export default App

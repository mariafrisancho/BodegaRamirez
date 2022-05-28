import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from '../../../BodegaRamirezm/src/components/Cart/Cart';
import ItemDetailContainer from '../../../BodegaRamirezm/src/components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';


import NavBar from '../components/Nabvar/NavBar';


const AppRouter = () => {
    return (

        <BrowserRouter>




            <NavBar />

            <Routes>
                <Route path="/" element={<ItemListContainer saludo='Bienvenidos a Vinos y Piscos Ramirez' />} />
                <Route path="/categoria/:id" element={<ItemListContainer saludo='Bienvenidos a Vinos y Piscos Ramirez' />} />
                <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>

        </BrowserRouter>
    )
}
export default AppRouter;
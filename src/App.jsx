import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nabvar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {



  return (
    // < BrowserRouter>

      <div classNameName="App">

     <NavBar/>
     <ItemListContainer saludo='Bienvenidos a Vinos y Piscos Ramirez' />
        {/* <Routes>
        <Route path="/" element={   <ItemListContainer saludo='Bienvenidos a Vinos y Piscos Ramirez' />} />
        <Route path="/detalle:detalId" element={   <ItemDetailContainer />} />
     
        </Routes> */}
     
      </div>
    // </BrowserRouter>

  )
}

export default App

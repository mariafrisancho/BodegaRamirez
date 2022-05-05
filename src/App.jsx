import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nabvar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  


  return (
    <div classNameName="App">
     
   <NavBar/>
   <ItemListContainer saludo='Bienvenidos a Vinos y Piscos Ramirez'/>

    
    </div>

  )
}

export default App

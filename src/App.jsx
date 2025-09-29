import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import CartContainer from './components/CartContainer/CartContainer'

function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenido a Distribuidora de la Costa"></ItemListContainer>} />
        <Route path='/categoria/:categParam' element={<ItemListContainer></ItemListContainer>}/>
        <Route path='/detalle/:idParam' element={<ItemDetailContainer></ItemDetailContainer>} />
        <Route path='/cart' element={<CartContainer></CartContainer>}/>
        <Route path='*' element={ <h1>404: Página no encontrada</h1>} />
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App

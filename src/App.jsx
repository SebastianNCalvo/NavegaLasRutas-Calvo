import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenido a Distribuidora de la Costa"></ItemListContainer>} />
        <Route path='/categoria/:categParam' element={<ItemListContainer></ItemListContainer>}/>
        <Route path='/detalle/:idParam' element={<ItemDetailContainer></ItemDetailContainer>} />
        <Route path='*' element={ <h1>404: Página no encontrada</h1>} />

        {/* <ItemListContainer greeting="Bienvenido a Distribuidora de la Costa"></ItemListContainer> */}
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App

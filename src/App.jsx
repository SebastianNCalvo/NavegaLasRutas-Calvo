import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import footer from './components/footer'
import Footer from './components/footer'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Bienvenido a Distribuidora de la Costa"></ItemListContainer>
      <Footer></Footer>
    </>
  )
}

export default App

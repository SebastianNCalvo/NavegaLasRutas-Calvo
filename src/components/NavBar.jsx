import './NavBar.css'
import CartWidget from './CartWidget'

export default function NavBar(){
  return (
    <nav>
      <span>Destribuidora de la Costa</span>
      <ul>
        <li><a href="">Alfajores</a></li>
        <li><a href="">Chocolates</a></li>
        <li><a href="">Snack</a></li>
      </ul>
      <CartWidget></CartWidget>
    </nav>
  )
}
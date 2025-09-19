import './NavBar.css'
import CartWidget from './CartWidget'

export default function NavBar(){
  return (
    <nav>
      <img className='imagenMarca' src="./logos/marca2.png" alt="" />
      <ul>
        <li><a href="">Alfajores</a></li>
        <li><a href="">Chocolates</a></li>
        <li><a href="">Snack</a></li>
        <li><a href="">Pizza</a></li>
      </ul>
      <div className='logoCarrito'>
        <CartWidget></CartWidget>
      </div>
    </nav>
  )
}
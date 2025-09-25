import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router'

export default function NavBar(){
  return (
    <nav>
      <Link to="/">
        <img className='imagenMarca' src="./logos/marca2.png" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/categoria/alfajor">
            Alfajores
          </Link>
        </li>
        <li>
          <Link to="/categoria/chocolate">
            Chocolate
          </Link>
        </li>
        <li>
          <Link to="/categoria/snack">
            Snack
          </Link>
        </li>
        <li>
          <Link to="/categoria/pizza">
            Pizza
          </Link>
        </li>
      </ul>
      <Link to="/cart">
        <span>
          <CartWidget></CartWidget>
        </span>
      </Link>
    </nav>
  )
}
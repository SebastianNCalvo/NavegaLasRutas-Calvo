import cartContext from '../../context/cartContext'
import './CartWidget.css'
import { useContext } from 'react'

export default function CartWidget() {
    const {contarItemsCarrito} = useContext(cartContext)
    return (
        <span>🛒 ({contarItemsCarrito()})</span>
    )
}
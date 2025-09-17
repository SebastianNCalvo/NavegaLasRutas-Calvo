// 1. Componentes -> Nombre en mayúscula
import ButtonAddToCart from './ButtonAddToCart';
import './Item.css'

function Item( {title, img, price} ){
  // 2. Componentes retornan JSX/HTML
  return ( 
      <div className="item-card">
        <h2 className="item-card-title"> {title} </h2>
      <img 
        className="item-card-img"
        height="300"
        src={img}
        alt={title}
        />

      <h3 className="item-card-price">Precio: $ {price}</h3>
      <ButtonAddToCart />
    </div>
  )
}

// 3. Exportamos el componente
export default Item;
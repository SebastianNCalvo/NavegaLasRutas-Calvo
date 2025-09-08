import Item from "./Item"
export default function ItemListContainer( props ){
  return (
    <div>
        <h2>{props.greeting}</h2>
        <div>
        <h2>Item List</h2>        
        <Item title="Alfajor Milka Oreo" price="1900" img="https://static.cotodigital3.com.ar/sitios/fotos/large/00267700/00267716.jpg"/>
        <Item title="Chocolate Cofler" price="3500" img="https://static.cotodigital3.com.ar/sitios/fotos/large/00185000/00185021.jpg" />
        <Item title="Papas fritas Jamón Serrano" price="4500" img="https://static.cotodigital3.com.ar/sitios/fotos/large/00567500/00567585.jpg"/>

      </div>
    </div>
  )
}
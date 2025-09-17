import Item from "./Item"
import products from "../data/productos"
import getMockApiData from "../data/mockApi"

export default function ItemListContainer( props ){

  getMockApiData()
  .then((productList)=> {
    console.log("Promesa terminada");
  })
  .catch((error) =>{
    alert("Error al cargar los datos")
    console.log("Error encontrado: "+error);    
  })
  

  return (
    <div>
      <h2>{props.greeting}</h2>
      <div>
        <h2>Nuestros productos</h2>        
        {
          products.map(product => <Item {...product}></Item>)
        }
      </div>
    </div>
  )
}
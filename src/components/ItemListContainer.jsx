import './ItemListContainer.css'
import Item from "./Item"
import getMockApiData from "../data/mockApi"
import { useEffect, useState } from 'react'

export default function ItemListContainer( props ){
  const [products, setProducts] = useState([])

  useEffect(() =>{
    getMockApiData()
    .then( (productList)=> {
      setProducts(productList)
      return productList
    })
    .catch( (error) =>{
      alert("Error al cargar los datos. Recargue por favor")
      console.log("Error encontrado: "+error);    
    })
  }, [])
  

  return (
    <div>
      <h2>{props.greeting}</h2>
      <div>
        <h2>Nuestros productos</h2>
        {products.length === 0 ? "Cargando..." : ""}
        <div className='productos'>
          {
            products.map(product => <Item {...product}></Item>)
          }
        </div>       
      </div>
    </div>
  )
}
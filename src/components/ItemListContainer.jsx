import './ItemListContainer.css'
import Item from "./Item"
import getMockApiData, { getProductByCategoria } from "../data/mockApi"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ItemListContainer( props ){
  const [products, setProducts] = useState([])
  const {categParam}= useParams()
  
  useEffect(() =>{
    if(categParam){
      getProductByCategoria(categParam)
      .then( productsByCateg=> {setProducts(productsByCateg)})
      .catch( (error) =>{
        alert("Error al cargar los datos. Recargue por favor")
        console.log("Error encontrado: "+error);    
      })
    } else{
      getMockApiData()
      .then( (productList)=> {setProducts(productList)})
      .catch( (error) =>{
        alert("Error al cargar los datos. Recargue por favor")
        console.log("Error encontrado: "+error);    
      })
    } 
  }, [categParam])
  
  return (
    <div>
      <h2>{props.greeting}</h2>
      <div>
        <h2>Nuestros productos</h2>
        {products.length === 0 ? "Cargando..." : ""}
        <div className='productos'>
          {
            products.map(product => <Item key={product.id} {...product}></Item>)
          }
        </div>       
      </div>
    </div>
  )
}
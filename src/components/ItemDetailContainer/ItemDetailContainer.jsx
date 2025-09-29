import './ItemDetailContainer.css'
import { Link, useParams } from 'react-router'
import { getProductById } from '../../data/mockApi'
import { useEffect, useState } from 'react'
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart'
import products from '../../data/productos'


export default function ItemDetailContainer() {
    const {idParam} = useParams()
    const [product, setProduct] = useState({loading:true})
    const [cantidad, setCantidad] = useState([1])

    function restarCantidad() {
        if(cantidad == 1){
            alert('No se puede descontar más unidades')
        } else{
            let cantidadNueva = Number(cantidad) - 1
            setCantidad(cantidadNueva)
        }
    }
    function agregarCantidad() {
        let cantidadNueva = Number(cantidad) + 1
        setCantidad(cantidadNueva)
    }


    useEffect(()=>{
        getProductById(idParam)
        .then (response => {setProduct(response)})
        .catch (error => alert(error))
    }, [])
    
    if(product.loading){
        return <p>Cargando...</p>
    } else{
        return ( 
            <div className="item-card-detail-container">
                <div className="item-card-detail">
                    <h2 className="item-card-title-detail"> {product.title} </h2>
                    <div className="item-card-separador-detail">
                        <div className='item-card-img-detail-container'>
                            <img className="item-card-img-detail" src={product.img}/>
                        </div>
                        <div  className="item-card-description-detail">
                            <h3>Descripción del producto:</h3>
                            <p>{product.description}</p>
                            <h4 className="item-card-price-detail">Precio: $ {product.price}</h4>
                            <div className="item-card-cantidad-detail">
                                <button className='button-add' onClick={restarCantidad}>-1</button>
                                <p>{cantidad}</p>
                                <button className='button-add' onClick={agregarCantidad}>+1</button>
                            </div>
                            <Link>
                                <ButtonAddToCart></ButtonAddToCart>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
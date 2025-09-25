import './ItemDetailContainer.css'
import { Link, useParams } from 'react-router'
import { getProductById } from '../../data/mockApi'
import { useEffect, useState } from 'react'
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart'


export default function ItemDetailContainer() {
    const {idParam} = useParams()
    const [product, setProduct] = useState({loading:true})

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
                        <div>
                            <h3>Descripción del producto:</h3>
                            <p>{product.description}</p>
                            <h4 className="item-card-price-detail">Precio: $ {product.price}</h4>
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
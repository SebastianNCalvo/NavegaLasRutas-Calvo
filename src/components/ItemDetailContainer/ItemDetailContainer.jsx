import '../Item.css'
import { Link, useParams } from 'react-router'
import { getProductById } from '../../data/mockApi'
import { useEffect, useState } from 'react'
import ButtonAddToCart from '../ButtonAddToCart'


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
            <div className="item-card">
            <h2 className="item-card-title"> {product.title} </h2>
            <img className="item-card-img" src={product.img}/>
            <h3 className="item-card-price">Precio: $ {product.price}</h3>
            <Link>
                <ButtonAddToCart></ButtonAddToCart>
            </Link>

            </div>
        )
    }
}
import './ItemDetailContainer.css'
import { useParams } from 'react-router'
import { useEffect, useState, useContext } from 'react'
import cartContext from '../../context/cartContext'
import { getProductById } from '../../data/firebase'
import Swal from 'sweetalert2'


export default function ItemDetailContainer() {
    const {idParam} = useParams()
    const [product, setProduct] = useState({loading:true})
    let [cantidad, setCantidad] = useState(1)
    const context = useContext(cartContext)

    useEffect(()=>{
        getProductById(idParam)
        .then (response => {setProduct(response)})
        .catch (error => alert(error))
    }, [])
    
    function agregarCantidad(){
        cantidad++
        setCantidad(cantidad)
        return cantidad
    }

    function quitarCantidad(){
        if(cantidad < 2){
            Swal.fire({
                icon: "error",
                title: "No puedes bajar más la cantidad",
                text: "La cantidad minima para comprar es 1. De lo contrario, no compre el producto"
                });
        } else{
            cantidad--
        }
        setCantidad(cantidad)
        return cantidad
    }

    function agregarAlCarrito(){
        context.addToCart(product)
        setCantidad(1)
    }

    product.cantidad=cantidad

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
                                <button className='button-add' onClick={()=>quitarCantidad()}>-1</button>
                                    <p>{cantidad}</p>
                                <button className='button-add' onClick={()=>agregarCantidad()}>+1</button>
                            </div>
                            <div>
                                <button onClick={()=>agregarAlCarrito()}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
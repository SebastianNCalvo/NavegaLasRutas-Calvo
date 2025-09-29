import './CartContainer.css'

export default function CartContainer(){
    
    return(
        <div className='divCarrito'>
            <table>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Eliminar</th>
                    <th>Precio Total</th>
                </tr>

            </table>
        </div>
    )
}
import './FormCheckout.css'
import { useState } from "react"

export default function FormCheackout(props){
    const [formData, setFormData] = useState({
        username: "", email:"" ,phone:""
    })

    function handleSubmit(event){
        event.preventDefault()
        props.handleCheckout(formData)
    }

    function handleInputChange(e){
        const value = e.target.value
        const inputName = e.target.name
        const newFormData = {...formData}
        newFormData[inputName] = value
        setFormData(newFormData)
    }

    function resetForm(){
        setFormData({
            username: "", email:"" ,phone:""
        })
    }
    return(
        <div className='formContainer'>
            <h4>Completa con tus datos</h4>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="Nombre">Nombre :
                    <input
                    value={formData.username}
                    onChange={handleInputChange}
                    name="username" 
                    type="text" 
                    placeholder="Tu nombre"
                    required/>
                </label>
                <label htmlFor="Email">Email : 
                    <input
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email" 
                    type="email" 
                    placeholder="mail@mail.com"
                    required/>
                </label>
                <label htmlFor="Teléfono">Teléfono :
                    <input
                    value={formData.phone}
                    onChange={handleInputChange}
                    name="phone" 
                    type="tel" 
                    placeholder="123"
                    required/>
                </label>
                <div>
                    <button className="btnFormulario" type="submit">Enviar</button>
                    <button className="btnFormulario" type="button" onClick={resetForm}>Reiniciar formulario</button>
                </div>
            </form>
        </div>
    )   
}
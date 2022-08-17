import { useState } from "react"
 import './form.scss'
const INITIAL_STATE={
    name:'',
    lastName:'',
    phoneNumber:'',
    email:'',
}
 
 
const Form=()=>{
    const[form,setForm]=useState(INITIAL_STATE);
 
    const submitForm=(event)=>{
        event.preventDefault();
        console.log('Enviado formulario',form)
    }
 
    const handleInput=(event)=>{
        const{name,value}=event.target;
        setForm({
            ...form,
            [name]:value,
        });
    }
    return(
        <form className="form" onSubmit={submitForm}>
            <h2>Solicitud de contacto</h2>
            <label>
                <p>Nombre</p>
                <input type='text' name='name' value={form.name} onChange={handleInput}></input>
            </label>
            <label>
                <p>Apellido</p>
                <input type='text' name='lastName' value={form.lastName} onChange={handleInput}></input>
            </label><label>
                <p>Telefono</p>
                <input type='text' name='phoneNumber' value={form.phoneNumber} onChange={handleInput}></input>
            </label><label>
                <p>Email</p>
                <input type='text' name='email' value={form.image} onChange={handleInput}></input>
            </label>
            <div>
                <button className="buttonF" type='submit'>Enviar Info</button>
            </div>
 
        </form>
 
    );
};
export default Form;
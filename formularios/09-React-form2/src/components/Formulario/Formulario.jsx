// import React, { useState } from 'react'

/*import { ESLint } from "eslint";*/
import { useState } from "react";

const Formulario = ({datos,setdatos}) => {

    const initUser = {
        nombre: datos.nombre,
        apellidos: datos.apellidos
    }

    const[form, setFormState] = useState(initUser);

    const handleInputChange = (e) => {
        setFormState ({
            ... form, 
            [e.target.name]: 
            e.target.type === 'checkbox' ? e.target.checkbox : e.target.value
            // [target.name]: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setdatos(form);
        setFormState({nombre: '', apellidos: ''});
    }

    return (
        <div className='row'>
            <div className="form-content w500">
                <h1 className='form-title'>Formulario</h1>
                <form onSubmit={handleSubmit}>
                    <div className="col mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Introducir nombre" name="nombre" value={form.nombre} onChange={handleInputChange}/> 
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="surname" className="form-label">Apellidos</label>
                        <input type="text" className="form-control" id="surname" placeholder="Introducir apellidos" name='apellidos' value={form.apellidos} onChange={handleInputChange}/>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-6'>
                                <button className='btn btn-primary' type='submit'>Enviar</button>
                            </div>
                            {/*<div className='col-6'>
                                <h3>{datos.nombre} - {datos.apellidos}</h3>
                            </div>*/}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario;
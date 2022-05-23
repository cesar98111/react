import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')

    /*
    const mostrarEvento = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
    }*/

    /* El nombre es para diferenciarlos en los input*/
    return (
        <div className='row'>
            <div className="form-content w500">
                <h1 className='form-title'>Formulario</h1>
                <form>
                    <div className="col mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Introducir nombre" name="nombre" onChange={(e) => setNombre(e.target.value)}/> 
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="surname" className="form-label">Apellidos</label>
                        <input type="text" className="form-control" id="surname" placeholder="Introducir apellidos" name='apellido' onChange={(e) => setApellidos(e.target.value)}/>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-6'>
                                <button className='btn btn-primary'>Enviar</button>
                            </div>
                            <div className='col-6'>
                                <h3>{nombre} - {apellidos}</h3>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario;
import Formulario from "./components/Formulario";
import Card from "./components/Card"
import React, { useState } from 'react'

const App = () => {
    /*para sacar informacion el useState debe estar en el padre */
    /*pasar informacion de un componente a otro */
    const [datos, setdatos] = useState({
        nombre: 'Pepe',
        apellidos: 'Rguez'
    })

    return (
        <div className="container mt-5">
            <Formulario datos={datos} setdatos={setdatos}/>
            <Card data={datos}/>
        </div>
    );
};

export default App;
import { Fragment } from "react"
const App = () =>{
    const saludo ='Hola Pepe';
    const edad = 35;
    const dias = [1,2,3,4,5,6]
    const casado = true;
    const alumno ={nombre: 'jose',edad: 35};


    return(
        /*
        <Fragment>
            <h1>Hello world</h1>
            <p>hola mundo</p>
        </Fragment>
        **/
        <>
        <h1>Hello world</h1>
        <p class="hola">String{saludo}</p>
        <p>Numerica: {edad}</p>
        <p>Array: {dias}</p>
        <p>Boolean{casado.toString()}</p>
        <p>Object:{JSON.stringify(alumno,null,5)}</p>
        
    </>
        
    )
}

export default App
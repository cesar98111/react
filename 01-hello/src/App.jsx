import { Fragment } from "react"
const App = (props) =>{
    const {name} = props;


    return(
        /*
        <Fragment>
            <h1>Hello world</h1>
            <p>hola mundo</p>
        </Fragment>
        **/
        <>
        <h1>Hello world</h1>
        <p>hola mundo {name}</p>
    </>
        
    )
}

export default App
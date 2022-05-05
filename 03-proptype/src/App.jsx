import PropTypes from 'prop-types';
const App = (name, surname) =>{
    


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
        
    );
};

App.prototypes={
    name:PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
}

export default App
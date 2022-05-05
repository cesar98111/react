import propTypes from 'prop-types';
const Welcome = ({name, surname}) =>{
    
    return (
        <div>
        <h1>Hello world</h1>
        <p>hola mundo {name} {surname}</p>
        
        </div>
    );
};
Welcome.propTypes={
    name: propTypes.string.isRequired,
    surname: propTypes.string.isRequired
};

export default Welcome;
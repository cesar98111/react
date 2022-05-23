import PropTypes  from 'prop-types';
import React from 'react'

export const Card = ({ data }) => {
    return (
        <div className='container mt-5'>
            <div className='alert alert-success role="alert"'>
                Nombre: {data.nombre}, Apellidos: {data.apellidos}
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.object.isRequired
};

export default Card;
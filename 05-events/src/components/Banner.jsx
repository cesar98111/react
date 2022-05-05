

    const Banner =({title, onClick ,onMouseOver, onMouseOut}) =>{
        
        return (
        <div className="Banner" onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}> 
            {title}
        </div>)// el onclick ejecuta una funcion que se le da
    };

    export default Banner

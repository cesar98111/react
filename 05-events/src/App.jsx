import Banner from './components/Banner';
const App = () =>{
    

    const handleclick = (e) =>{
        e.target.style.background
    }
    const MoveHandle = (e) =>{
        e.target.style.background='red';
    }
    const HandleOut=(e) =>{
        e.target.style.background='green';
    }
    return(
        
        <>
       <Banner title= 'Ejemplo title' onClick={handleclick} onMouseOver={MoveHandle} onMouseOut={HandleOut}/>
    </>
        
    )
}

export default App
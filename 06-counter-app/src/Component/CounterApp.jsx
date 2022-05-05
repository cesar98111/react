const CounterApp=({value})=>{
    const HandleAdd= () =>{
        console.log('+1')
    }
    return(<div>
        <h1>CounterAPP</h1>
        <p>{value}</p>
        <button
        onClick={HandleAdd}
        >+1</button>
    </div>)
    
}

export default CounterApp;
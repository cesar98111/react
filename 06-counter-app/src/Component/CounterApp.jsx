import {useState} from 'react';

const CounterApp=({value})=>{
    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20
    });
    
    const HandleAdd= () =>{
        setCounter({
            ... counter,
            counter1: counter.counter1+1,

        });
        
    }
    const substract = () =>{
        setCounter({
            ... counter,
            counter2: counter.counter2-1});
       
    }
    const reset = () =>{
        setCounter({
            ... counter,
            counter1: counter.counter1=0,
            counter2: counter.counter2=0
        })
    }
    return(<div>
        <h1>CounterAPP</h1>
        <hr></hr>
        <p>{counter.counter1}</p>
        <p>{counter.counter2}</p>
        <button
        onClick={HandleAdd}
        >+1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={substract}>-1</button>
    </div>)
    
}

export default CounterApp;
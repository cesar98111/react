import {useState} from 'react'
const Toogle = () =>{
    const [condition, setCondition] = useState(true);

    const changeState = () =>{
        if (condition){
            setCondition(false);
        }else{
            setCondition(true);
        }
    }
    return(
        <>
            <button onClick={changeState}>Toogle</button>
            {/** puede ser  <button onClick={setCondition(!condition)}>Toogle</button>*/}
            {
                condition ? <h1> Condicion true</h1>:<h1>Condicion FALSE</h1>
                
            }
            

            {/**Para una unica condicion con op ternario */}
            {
                !condition ? <h1> Condicion true</h1>:null
            }
            {/** para una unica condicion con op && */}
                 {condition && <h1></h1>} 
           
        </>
            
        
    );
};

export default Toogle;
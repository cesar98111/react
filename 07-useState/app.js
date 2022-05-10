const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo...')}];
};

const [nombre, setNombre] = useState('pepe');

nombre= 'juan'
console.log(nombre);

setNombre();

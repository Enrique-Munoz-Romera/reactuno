function SumarNumeros(props){
    const {numero1,numero2,color,realizarSuma} = props;

    var practica = "Practica"; 

    const sumar = () => {
        var suma = parseInt(numero1) + parseInt(numero2);
        console.log("La suma es: " + suma);
    }    

    var estilo = {backgroundColor:"black",color:"white"}

    return(
        <div>
            <h1 style = {estilo}>{practica}</h1> 
            <h2 style={{backgroundColor: color}}>Sumar numeros Component</h2>       
            <button onClick = {()=>sumar()}>
                Sumar numeros Component
            </button>
            <button onClick = {()=>realizarSuma(numero1,numero2)}>
                Sumar Numeros Parent
            </button>
        </div>
    )
}
export default SumarNumeros;
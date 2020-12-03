function Saludo (props){  
    var ejemplo = "Hasta el final";

    const botonPulsado = () => {
        console.log("has pulsado el botón");
        ejemplo = "Vamos Real!";
        console.log(ejemplo);
    } 

    const SumarNumeros= (num1,num2) => {
        var suma = num1 + num2;
        console.log("la suma es: "+ suma);
    }

    const mostrarMensaje = () => {
        return (<h1>I´m HMTL</h1>);

    }

    var estilofeo = {color:"white",backgroundColor:"blue"};
    // var name = props.nombre;
    // var age = props.edad; 
    const{name,age,metodo} = props;
    return(
        <div>
            <h1 style = {estilofeo}>
                {ejemplo}
            </h1>

            {SumarNumeros(7,7)}
            {botonPulsado()}
            {mostrarMensaje()}
            <h1>My first component</h1>
            <h2>Hello {name}, your age it´s: {age}</h2>
            <button onClick = {() => metodo(name + "" + age)}>
                Metodo Padre
            </button>
            <button onClick = {() => botonPulsado()} >
            Click me!
            </button>   
            <button onClick = {() => SumarNumeros(4,5)}>
                Mostrar Suma
            </button>
        </div>);
}

export default Saludo;
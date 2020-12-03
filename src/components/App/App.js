import logo from './../../logo.svg';
import './App.css';
//Debemos crearnos el componente en el lugar adecuado
import Saludo from "../Saludo"
import SumarNumeros from "../SumarNumeros"

function App() {
  //si deseamos enviar parametros a la función se quitab los ()
  const metodoPadre = descripcion => {
    console.log("Método del padre: " + descripcion);
  }

  const sumarPadre = (num1,num2) => {
    var suma = parseInt(num1) + parseInt(num2);
    console.log("Suma recibiendo del hijo: " + suma);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <Saludo name = "Jose" age ="15" metodo = {metodoPadre}/>
      <Saludo name = "Laura" age ="25" metodo = {metodoPadre}/>
      <Saludo name = "Juan" age ="39" metodo = {metodoPadre}/>   
      <SumarNumeros numero1 = "7" numero2 = "33" 
      color="yellow" realizarSuma = {sumarPadre}/>  
      <SumarNumeros numero1 = "13" numero2 = "67" 
      color="orange" realizarSuma = {sumarPadre}/>    
    </div>
  );
}

export default App;

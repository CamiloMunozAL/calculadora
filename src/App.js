import "./App.css";
import freeCodeCampLogo from "./imagenes/logo.png"; // importar la imagen del logo de freeCodeCamp
import Boton from "./componentes/Boton.js";
import Pantalla from "./componentes/Pantalla.js";
import BotonClear from "./componentes/BotonClear.js";
import { useState } from "react";
import { evaluate } from "mathjs"; //importar la libreria mathjs de funciones matematicas

function App() {
  //crear estado para lo que el usuario ingresa
  //inicialmente el input estará vacío
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  // funcion para manejar el input del usuario
  const manejarInput = (evento) => {
    //evento es el evento que se dispara cuando el usuario escribe en la pantalla
    //actualizamos el estado con el valor que el usuario escribe
    //target es el elemento que dispara el evento, en este caso el input
    //value es el valor del input
    setInput(evento.target.value);
  };

  // funcion para evaluar matematicamente la operacion
  const calcularResultado = () => {
    try {
      if (input) {
        // si el input no está vacío, entonces se evalua
        // se evalua el input y se actualiza el estado
        setInput(evaluate(input));
      } else {
        // si el input está vacío, se muestra un mensaje de error
        alert("Ingrese una operación válida");
      }
    } catch (error) {
      // si hay un error, se muestra un mensaje
      alert("Operación inválida");
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} className="logo" alt="logo" />
      </div>
      <div className="contenedor-calculadora">
        {/* no se necesita etiqueta de cierre porque adentro no debemos incluir algo */}
        <Pantalla input={input} onChange={manejarInput} />
        <div className="fila">
          {/* quiero pasar a la funcion para poder llamarla dentro del componente */}
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          {/* podemos crear una funcion anonima si es muy sencilla */}
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

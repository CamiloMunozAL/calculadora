import React from "react";
import "../hojas-de-estilo/Pantalla.css";

// Pantalla es un componente funcional que recibe dos props: input y onChange
// input es el valor que se mostrará en la pantalla
// onChange es la función que se ejecutará cuando el usuario escriba en la pantalla
const Pantalla = ({ input, onChange }) => {
  return <input className="input" value={input} onChange={onChange} />;
};

export default Pantalla;

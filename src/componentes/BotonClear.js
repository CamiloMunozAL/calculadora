import React from "react";

import "../hojas-de-estilo/BotonClear.css"

//definiendo componente funcional boton clear
const botonClear = (props) => {
    return (
        <div className="boton-clear"
        onClick={props.manejarClear}>
            {props.children}
        </div>
    );
}

export default botonClear;
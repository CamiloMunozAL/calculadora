import React from "react";
import "../hojas-de-estilo/Boton.css"

function Boton(props){

    //definicion funcion si es operadore

    // si el no es un numero y no es un punto y no es igual entonces es un operador devue
    const esOperador=valor =>{
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador':"" }`.trimEnd()}
        
        onClick={() => props.manejarClick(props.children)}>
            {/* debemos pasar una funcion, no una llamada a una funcion */}
            {/* pasamos el valro props.children, queremos que se agregue a la pantalla el valor del boton */}
            {/* trimEnd me elimina espacios al final */}
            {props.children}
            {/* props children */}
        </div>
    );
}

export default Boton;
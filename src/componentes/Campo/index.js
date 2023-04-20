import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  const placeHolderModificado = `${props.placeholder}...`;

  //destructuracion
  const { type = "text", titulo, required, valor } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{titulo}</label>
      <input
        placeholder={placeHolderModificado}
        required={required}
        value={valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};
export default Campo;

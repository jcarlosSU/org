import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //estado-hook
  //useState()
  //const [nombreVariable,funcionActualiza]=useState(valorInicial)
  console.log(props);
  /* const [mostrar, actualizarMostrar] = useState(true);
  const manejarClick = () => {
    console.log("Mostrar/ocultar elemento", !mostrar);
    actualizarMostrar(!mostrar);
  }; */
  return (
    <section className="org-section">
      <h3 className="title">Mi Organización </h3>
      <img src="/img/add.png" alt="imagen de add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;

import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuracion
  const { titulo, colorPrimario /*  colorSecundario */, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColorDeEquipo, like } = props;

  const objeto = { backgroundColor: hexToRgba(colorPrimario, 0.6) };
  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={objeto}>
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(evento) => {
              actualizarColorDeEquipo(evento.target.value, id);
            }}
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Equipo;

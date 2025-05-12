import { RespuestaEstado } from "../estados/respuestaEstado.js";
import Lenguaje from "../modelos/lenguaje.js";


class LenguajeControlador {
  static getAllLenguajes = async (req, res) => {
    try {
      const lenguaje = await LenguajeControlador.getAllLenguajes();
      if (lenguaje.error) {
        return RespuestaEstado.fallo(
          res,
          lenguaje.message,
          lenguaje.code
        )
      }
      return RespuestaEstado.hecho(
        res,
        lenguaje.data,
        lenguaje.message,
        lenguaje.code
      );
    } catch (error) {
      console.log(error.message);

      return RespuestaEstado.fallo(
        res,
        "Error",
        500
      );
    }

  }
}

export default LenguajeControlador;
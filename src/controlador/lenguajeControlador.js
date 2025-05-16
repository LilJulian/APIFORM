import { RespuestaEstado } from "../estados/respuestaEstado.js";
import LenguajeServicio from "../servicios/lenguajeServicios.js"



class LenguajeControlador {
  static getAllLenguajes = async (req, res) => {
    try {
      const lenguaje = await LenguajeServicio.allLenguaje();
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

      return RespuestaEstado.fallo(
        res,
        "Error",
        500
      );
    }
  }
  static obtenerLenguajeId = async (req, res) => {
    const { id } = req.params;
    try {
      const lenguaje = await LenguajeServicio.getByIdLenguaje(id);
      if (lenguaje.error) {
        return RespuestaEstado.fallo(
          res, lenguaje.message, lenguaje.code
        );
      }
      return RespuestaEstado.hecho(
        res, lenguaje.data, lenguaje.message, lenguaje.code
      );
    } catch (error) {
      return RespuestaEstado.fallo(res, "Error", 500)
    }
  }
  static createlenguaje = async (req, res) => {
    const { nombre_lenguaje } = req.body;
    
  }
}
export default LenguajeControlador;
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
    try {
      const lenguaje = await LenguajeServicio.createLenguaje(nombre_lenguaje);
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
    static actualizarlenguaje = async (req, res) => {
    try {
      const { id } = req.params
      const { nombre_lenguaje } = req.body;
      const lenguaje = await LenguajeServicio.actualizarLenguaje( nombre_lenguaje, id)
      if (lenguaje.error) {
        return RespuestaEstado.fallo(
          res, lenguaje.message, lenguaje.code
        );
      }   
      return RespuestaEstado.hecho(
        res, lenguaje.data, lenguaje.message, lenguaje.code
      )
    } catch (error) {
      return RespuestaEstado.fallo(
        res, "Error", 500
      )
    }
  }
    static deletelenguaje = async (req, res) => {
    try {
      const { id } = req.params;
      const lenguaje = await LenguajeServicio.eliminarLenguaje(id);
      return RespuestaEstado.hecho(
        res, lenguaje.data, lenguaje.message, lenguaje.code
      )
    } catch (error) {
      return RespuestaEstado.fallo(
        res,
        "Error",
        500
      );
    }
  }
}
export default LenguajeControlador;
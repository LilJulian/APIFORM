import { RespuestaEstado } from "../estados/respuestaEstado.js";
import CiudadServicio from "../servicios/ciudadServicio.js"



class CiudadControlador {
  static getAllCiudad = async (req, res) => {
    try {
      const ciudad = await CiudadServicio.allCiudad();
      if (ciudad.error) {
        return RespuestaEstado.fallo(
          res,
          ciudad.message,
          ciudad.code
        )
      }
      return RespuestaEstado.hecho(
        res,
        ciudad.data,
        ciudad.message,
        ciudad.code
      );
    } catch (error) {

      return RespuestaEstado.fallo(
        res,
        "Error",
        500
      );
    }
  }
  static obtenerCiudadId = async (req, res) => {
    const { id } = req.params;
    try {
      const ciudad = await CiudadServicio.getByIdCiudades(id);
      if (ciudad.error) {
        return RespuestaEstado.fallo(
          res, ciudad.message, ciudad.code
        );
      }
      return RespuestaEstado.hecho(
        res, ciudad.data, ciudad.message, ciudad.code
      );
    } catch (error) {
      return RespuestaEstado.fallo(res, "Error", 500)
    }
  }
  static createciudad = async (req, res) => {
    const { nombre_ciudad } = req.body;
    try {
      const ciudad = await CiudadServicio.createCiudad(nombre_ciudad);
       if (ciudad.error) {
        return RespuestaEstado.fallo(
          res, ciudad.message, ciudad.code
        );
      }
       return RespuestaEstado.hecho(
        res, ciudad.data, ciudad.message, ciudad.code
      );
    } catch (error) {
      return RespuestaEstado.fallo(res, "Error", 500)
    }
    
  }
    static actualizarciudad = async (req, res) => {
    try {
      const { id } = req.params
      const { nombre_ciudad } = req.body;
      const ciudad = await CiudadServicio.actualizarCiudad( nombre_ciudad, id)
      if (ciudad.error) {
        return RespuestaEstado.fallo(
          res, ciudad.message, ciudad.code
        );
      }   
      return RespuestaEstado.hecho(
        res, ciudad.data, ciudad.message, ciudad.code
      )
    } catch (error) {
      return RespuestaEstado.fallo(
        res, "Error", 500
      )
    }
  }
    static deleteciudad = async (req, res) => {
    try {
      const { id } = req.params;
      const ciudad = await CiudadServicio.eliminarCiudad(id);
      return RespuestaEstado.hecho(
        res, ciudad.data, ciudad.message, ciudad.code
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
export default CiudadControlador;
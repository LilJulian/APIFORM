import { RespuestaEstado } from "../estados/respuestaEstado.js";
import GeneroServicio from "../servicios/generoServicio.js"



class GeneroControlador {
  static getAllGenero = async (req, res) => {
    try {
      const genero = await GeneroServicio.allGenero();
      if (genero.error) {
        return RespuestaEstado.fallo(
          res,
          genero.message,
          genero.code
        )
      }
      return RespuestaEstado.hecho(
        res,
        genero.data,
        genero.message,
        genero.code
      );
    } catch (error) {

      return RespuestaEstado.fallo(
        res,
        "Error",
        500
      );
    }
  }
  static obtenerGeneroId = async (req, res) => {
    const { id } = req.params;
    try {
      const genero = await GeneroServicio.getByIdGenero(id);
      if (genero.error) {
        return RespuestaEstado.fallo(
          res, genero.message, genero.code
        );
      }
      return RespuestaEstado.hecho(
        res, genero.data, genero.message, genero.code
      );
    } catch (error) {
      return RespuestaEstado.fallo(res, "Error", 500)
    }
  }
  static creategenero = async (req, res) => {
    const { nombre_genero } = req.body;
    try {
      const genero = await GeneroServicio.createGenero(nombre_genero);
       if (genero.error) {
        return RespuestaEstado.fallo(
          res, genero.message, genero.code
        );
      }
       return RespuestaEstado.hecho(
        res, genero.data, genero.message, genero.code
      );
    } catch (error) {
      return RespuestaEstado.fallo(res, "Error", 500)
    }
    
  }
    static actualizargenero = async (req, res) => {
    try {
      const { id } = req.params
      const { nombre_genero } = req.body;
      const genero = await GeneroServicio.actualizarGenero( nombre_genero, id)
      if (genero.error) {
        return RespuestaEstado.fallo(
          res, genero.message, genero.code
        );
      }   
      return RespuestaEstado.hecho(
        res, genero.data, genero.message, genero.code
      )
    } catch (error) {
      return RespuestaEstado.fallo(
        res, "Error", 500
      )
    }
  }
    static deletegenero = async (req, res) => {
    try {
      const { id } = req.params;
      const genero = await GeneroServicio.eliminarGenero(id);
      return RespuestaEstado.hecho(
        res, genero.data, genero.message, genero.code
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
export default GeneroControlador;
import { RespuestaEstado } from "../estados/respuestaEstado.js";
import LenguajeUsuarioServicio from "../servicios/lenguajeUsuarioServicio.js";

class LenguajeUsuarioController {
  static getAllLenguajesUsuarios = async (req, res) => {    
    try {
      const respuesta = await LenguajeUsuarioServicio.getLenguajesUsuarios();   
      if (respuesta.error) {
        return RespuestaEstado.fallo(
          res,
          respuesta.message,
          respuesta.code
        );
      } else { 
        return RespuestaEstado.hecho(
          res,
          respuesta.data,
          respuesta.message,
          respuesta.code
        );
      }
    } catch (error) {
      RespuestaEstado.fallo(res, ".fallo al interno en el servidor", 500);
    }
  };

  static getUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
      const respuesta = await LenguajeUsuarioServicio.getUsuarioById(id);
      if (respuesta.error) {
        return RespuestaEstado.fallo(
          res,
          respuesta.message,
          respuesta.code
        );
      } else {        
        return RespuestaEstado.hecho(
          res,
          respuesta.data,
          respuesta.message,
          respuesta.code
        );
      }
    } catch (error) {
      RespuestaEstado.fallo(res, ".fallo al interno en el servidor", 500);
    }
  };

  static createLenguajeUsuario = async (req, res) => {
    const campos = req.body;
    try {
      const respuesta = await LenguajeUsuarioServicio.createLenguajeUsuario(campos);
      if (respuesta.error) {
        return RespuestaEstado.fallo(
          res,
          respuesta.message,
          respuesta.code
        );
      } else {
        return RespuestaEstado.hecho(
          res,
          respuesta.data,
          respuesta.message,
          respuesta.code
        );
      }
    } catch (error) {
      RespuestaEstado.fallo(res, ".fallo al interno en el servidor", 500);
    }
  };

  static updateLenguajeUsuario = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const usuario = await LenguajeUsuarioServicio.actualizarLenguajeUsuario(campos, id);
      if (usuario.error) {
        return RespuestaEstado.fallo(
          res,
          usuario.message,
          usuario.code
        );
      }
      return RespuestaEstado.hecho(
        res,
        usuario.data,
        usuario.message,
        usuario.code
      );
    } catch (error) {
      RespuestaEstado.fallo(res, ".fallo al interno en el servidor", 500);
    }
  };

  static deleteLenguajeUsuario = async (req, res) => {
    const { id } = req.params;
    try {
      const respuesta = await LenguajeUsuarioServicio.deleteLenguajeUsuario(id);
      if (respuesta.error) {
        RespuestaEstado.fallo(
          res,
          respuesta.message,
          respuesta.code
        );
      } else {
        RespuestaEstado.hecho(
          res,
          respuesta.data,
          respuesta.message,
          respuesta.code
        );
      }
    } catch (error) {
      RespuestaEstado.fallo(res, "Error al interno en el servidor", 500);
    }
  };
}

export default LenguajeUsuarioController;
import Usuario from "../modelos/usuarios.js";
import { RespuestaEstado } from "../estados/respuestaEstado.js";
import UsuarioServicio from "../servicios/usuarioServicios.js";



class UsuarioControlador {
  static getAllUsuario = async (req, res) => {
    try {
      const respuesta = await UsuarioServicio.getAllUsuario();
      if (respuesta.error) {
        return RespuestaEstado.fallo(
          res,
          respuesta.message,
          respuesta.code
        )
      }
      return RespuestaEstado.hecho(
        res,
        respuesta.data,
        respuesta.message,
        respuesta.code
      );
    } catch (error) {
      return RespuestaEstado.fallo(
        res,
        "Error",
        500
      );
    }
  };
  static obtenerUsuarioId = async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await UsuarioServicio.getUsuarioById(id);
      if (usuario.error) {
        return RespuestaEstado.fallo(
          res, usuario.message, usuario.code
        );
      }
      return RespuestaEstado.hecho(
        res, usuario.data, usuario.message, usuario.code
      );
    } catch (error) {
      return RespuestaEstado.fallo(res, "Error", 500)
    }
  }
  static createusuario = async (req, res) => {
    const { nombre, apellido, telefono, documento, id_ciudad, id_genero } = req.body;
    try {
      const respuesta = UsuarioServicio.createUsuario(nombre, apellido, telefono, documento, id_ciudad, id_genero);
      if (respuesta.error) {
        return RespuestaEstado.fallo(
          res,
          respuesta.message,
          respuesta.code
        );
      }
      return RespuestaEstado.hecho(res, respuesta.data, respuesta.message, respuesta.code)
    } catch (error) {
      return RespuestaEstado.fallo(
        res,
        "Error",
        500
      );
    }
  }
  static actualizarusuario = async (req, res) => {
    try {
      const { id } = req.params
      const { nombre, apellido, telefono, documento, id_ciudad, id_genero } = req.body;
      const usuario = await UsuarioServicio.actualizarUsuarioPut(nombre, apellido, telefono, documento, id_ciudad, id_genero, id)
      return RespuestaEstado.hecho(
        res, usuario.data, usuario.message, usuario.code
      )
    } catch (error) {
      return RespuestaEstado.fallo(
        res, "Error", 500
      )
    }
  }
  static actualizarParcialusuarios = async (req, res) => {
    try {
      const { id } = req.params
      const objeto = req.body;
      const usuario = await UsuarioServicio.actualizarUsuarioPath(objeto, id)
      return RespuestaEstado.hecho(
        res, usuario.data, usuario.message, usuario.code
      )
    } catch (error) {
      return RespuestaEstado.fallo(
        res,
        "Error",
        500
      );
    }
  }

  static deleteusuario = async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await UsuarioServicio.eliminarUsuario(id);
      return RespuestaEstado.hecho(
        res, usuario.data, usuario.message, usuario.code
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

export default UsuarioControlador;
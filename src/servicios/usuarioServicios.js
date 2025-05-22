import Usuario from "../modelos/usuarios.js";

class UsuarioServicio {
  static async getAllUsuario() {
    try {
      const OBJUsuario = new Usuario();
      const usuarios = await OBJUsuario.getAll();
      if (usuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay usuarios registrados",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Usuarios obtenidos correctamente",
        data: usuarios,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener usuarios",
      };
    }
  }
  static async getUsuarioById(id) {
    try {
      const OBJUsuario = new Usuario();
      const resultado = await OBJUsuario.getbyId(id);
      if (resultado.length === 0) {
        return {
          error: false,
          code: 500,
          message: "No hay usuarios registrados con el id " + id,
        }
      }
      return {
        error: false,
        code: 200,
        message: "Operacion exitosa",
        data: resultado
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener usuario"
      }
    }
  }
  static async createUsuario(nombre, apellido, telefono, documento, nombre_usuario, id_ciudad, id_genero) {
    try {
      const OBJUsuario = new Usuario();
      const usuario = await OBJUsuario.create(nombre, apellido, telefono, documento, nombre_usuario, id_ciudad, id_genero);
      return {
        error: false,
        code: 200,
        message: "Usuario creado exitosamente",
        data: usuario
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al crear usuario"
      }
    }
  }

  static async actualizarUsuarioPut(nombre, apellido, telefono, documento, id_ciudad, id_genero, id) {
    try {
      const OBJUsuario = new Usuario();
      const usuario = await OBJUsuario.updateUsuario(nombre, apellido, telefono, documento, id_ciudad, id_genero, id);
      return {
        error: false,
        code: 200,
        message: "Usuario actualizado correctamente",
        data: usuario
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "No se puede actualizar el usuario"
      }
    }
  }

  static async actualizarUsuarioPath(objeto, id) {
    try {
      const OBJUsuario = new Usuario();
      const usuario = await OBJUsuario.updatePatch(objeto, id)
      return {
        error: false,
        code: 200,
        message: "Usuario actualizado correctamente",
        data: usuario
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "No se puede actualizar el usuario"
      }
    }
  }

  static async eliminarUsuario(id) {
    try {
      const OBJUsuario = new Usuario();
      const usuario = await OBJUsuario.delete(id)
      return {
        error: false,
        code: 200,
        message: "Usuario eliminado correctamente",
        data: usuario
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "No se puede eliminar el usuario"
      }
    }
  }
}

export default UsuarioServicio;
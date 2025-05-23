import LenguajeUsuario from "../modelos/lenguajeUsuario.js";

class LenguajeUsuarioServicio {
  static async getLenguajesUsuarios()
  { 
    try {
      const OBJLenguajeUsuario = new LenguajeUsuario();
      const lenguajesUsuarios = await OBJLenguajeUsuario.getAll();
      if (lenguajesUsuarios.length === 0) {
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
        data: lenguajesUsuarios,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los lengujes de los usuarios",
      };
    }
  }

  static async getUsuarioById(id) {
    try {
      const OBJLenguajeUsuario = new LenguajeUsuario();
      const lenguajesUsuario = await OBJLenguajeUsuario.getUsuarioById(id);
      if (lenguajesUsuario.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrado",
        };
      }
      // Retornamos el usuario obtenido
      return {
        error: false,
        code: 200,
        message: "Lenguajes del usuario obtenidos correctamente",
        data: lenguajesUsuario,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los lenguajes del usuario",
      };
    }
  }

static async createLenguajeUsuario(data) {
  try {
    const campos = Object.keys(data).join(',');
    const valores = Object.keys(data).map(() => '?').join(',');
    const parametros = Object.values(data);

    const OBJLenguajeUsuario = new LenguajeUsuario();
    const lenguajeUsuario = await OBJLenguajeUsuario.createLenguajeUsuario(campos, valores, parametros);

    if (lenguajeUsuario.affectedRows === 0) {
      return {
        error: true,
        code: 400,
        message: "Error al asignar el lenguaje al usuario",
      };
    }

    return {
      error: false,
      code: 201,
      message: "Lenguaje asignado correctamente",
      data: { ...data }
    };
} catch (error) {
      console.log(error.message);
    return {
      error: true,
      code: 500,
      message: "Error al asignar el lenguaje",
    };

  }
  
}


  static async actualizarLenguajeUsuario(campos, id) { 
    try {
      const OBJLenguajeUsuario = new LenguajeUsuario();
      const usuario = await OBJLenguajeUsuario.getUsuarioById(campos, id);
      if (usuario.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrado",
        };
      }
       const eliminarUsuario = await this.deleteLenguajeUsuario(id);
      if (eliminarUsuario.error) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar el lenguaje del usuario",
        };
      }
    const respuesta = await this.createLenguajeUsuario(campos);
    if (respuesta.error) {
      return {
        error: true,
        code: 400,
        message: "Error al asignar los nuevos lenguajes al usuario",
      };
    }

    return {
      error: false,
      code: 200,
      message: "Lenguaje actualizado correctamente",
      data: respuesta.data,
    };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar el lenguaje del usuario",
      };
    } 
  }

  static async deleteLenguajeUsuario(id) { 
    try {
      const OBJLenguajeUsuario = new LenguajeUsuario();
      const usuarios = await OBJLenguajeUsuario.getUsuarioById(id);
      if (usuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrado",
        };
      }    
      const respuesta = await OBJLenguajeUsuario.deleteUserById(id); 
      if (respuesta.affectedRows === 0) {
        return {
          error: true,
          code: 400,
          message: "No se pudo eliminar el usuario, ocurrio un error inesperado.",
        };
      }      
      return {
        error: false,
        code: 200,
        message: "Usuario eliminado correctamente",
        data: usuarios,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar el usuario",
      };
    }
  }
}
export default LenguajeUsuarioServicio;
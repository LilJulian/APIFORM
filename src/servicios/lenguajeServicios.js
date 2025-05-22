import Lenguaje from "../modelos/lenguaje.js";

class LenguajeServicio {
  static async allLenguaje() {
    try {
      const OBJLenguaje = new Lenguaje();
      const lenguaje = await OBJLenguaje.getAll();
      if (lenguaje.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay lenguajes registrados",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Lenguajes obtenidos correctamente",
        data: lenguaje,
      };
    } catch (error) {
      console.log(error.message);
      return {
        error: true,
        code: 500,
        message: "Error al obtener lenguaje",
      }
    }
  }
  static async getByIdLenguaje(id) {
    try {
      const OBJLenguaje = new Lenguaje();
      const lenguaje = await OBJLenguaje.getById(id);
      if (lenguaje.length === 0) {
        return {
          error: false,
          code: 500,
          message: "No hay lenguajes registrados con el id " + id,
        }
      }
      return {
        error: false,
        code: 200,
        message: "Operacion exitosa",
        data: lenguaje
      }
    } catch (error) {
      console.log(error.message);
      return {
        error: true,
        code: 500,
        message: "Error al obtener lenguaje"
      }
    }
  }
    static async createLenguaje(nombre_lenguaje) {
    try {
      const OBJLenguaje = new Lenguaje();
      const lenguaje = await OBJLenguaje.create(nombre_lenguaje);
      return {
        error: false,
        code: 200,
        message: "Lenguaje creado exitosamente",
        data: lenguaje
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al crear el lenguaje"
      }
    }
  }
    static async actualizarLenguaje(nombre_lenguaje, id) {
    try {
      const OBJLenguaje = new Lenguaje();
      const lenguaje = await OBJLenguaje.updateLenguaje(nombre_lenguaje, id);
      return {
        error: false,
        code: 200,
        message: "lenguaje actualizado correctamente",
        data: lenguaje
      }
    } catch (error) {
      console.log(error.data);
      
      return {
        error: true,
        code: 500,
        message: "No se puede actualizar el lenguaje"
      }
    }
  }
   static async eliminarLenguaje(id) {
    try {
      const OBJLenguaje = new Lenguaje();
      const lenguaje = await OBJLenguaje.deleteLenguaje(id)
      return {
        error: false,
        code: 200,
        message: "Lsuario eliminado correctamente",
        data: lenguaje
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "No se puede eliminar el lenguaje"
      }

    }
  }
}

export default LenguajeServicio;


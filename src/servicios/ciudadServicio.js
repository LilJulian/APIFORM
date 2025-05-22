import Ciudad from "../modelos/ciudades.js";

class CiudadServicio {
  static async allCiudad() {
    try {
      const OBJCiudad = new Ciudad();
      const ciudad = await OBJCiudad.getAll();
      if (ciudad.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay ciudades registrados",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Ciudades obtenidos correctamente",
        data: ciudad,
      };
    } catch (error) {
      console.log(error.message);
      return {
        error: true,
        code: 500,
        message: "Error al obtener ciudades",
      }
    }
  }
  static async getByIdCiudades(id) {
    try {
      const OBJCiudad = new Ciudad();
      const ciudad = await OBJCiudad.getById(id);
      if (ciudad.length === 0) {
        return {
          error: false,
          code: 500,
          message: "No hay ciudades registrados con el id " + id,
        }
      }
      return {
        error: false,
        code: 200,
        message: "Operacion exitosa",
        data: ciudad
      }
    } catch (error) {
      console.log(error.message);
      return {
        error: true,
        code: 500,
        message: "Error al obtener ciudad"
      }
    }
  }
    static async createCiudad(nombre_ciudad) {
    try {
      const OBJCiudad = new Ciudad();
      const ciudad = await OBJCiudad.create(nombre_ciudad);
      return {
        error: false,
        code: 200,
        message: "ciudad creada exitosamente",
        data: ciudad
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al crear el ciudad"
      }
    }
  }
    static async actualizarCiudad(nombre_ciudad, id) {
    try {
      const OBJCiudad = new Ciudad();
      const ciudad = await OBJCiudad.updateCiudad(nombre_ciudad, id);
      return {
        error: false,
        code: 200,
        message: "ciudad actualizado correctamente",
        data: ciudad
      }
    } catch (error) {
      console.log(error.data);
      
      return {
        error: true,
        code: 500,
        message: "No se puede actualizar el ciudad"
      }
    }
  }
   static async eliminarCiudad(id) {
    try {
      const OBJCiudad = new Ciudad();
      const ciudad = await OBJCiudad.deleteCiudad(id)
      return {
        error: false,
        code: 200,
        message: "Ciudad eliminado correctamente",
        data: ciudad
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "No se puede eliminar la ciudad"
      }

    }
  }
}

export default CiudadServicio;
         
import Genero from "../modelos/generos.js";

class GeneroServicio {
  static async allGenero() {
    try {
      const OBJGenero = new Genero();
      const genero = await OBJGenero.getAll();
      if (genero.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay generos registrados",
        };
      }
      return {
        error: false,
        code: 200,
        message: "generos obtenidos correctamente",
        data: genero,
      };
    } catch (error) {
      console.log(error.message);
      return {
        error: true,
        code: 500,
        message: "Error al obtener generos",
      }
    }
  }
  static async getByIdGenero(id) {
    try {
      const OBJGenero = new Genero();
      const genero = await OBJGenero.getById(id);
      if (genero.length === 0) {
        return {
          error: false,
          code: 500,
          message: "No hay generoes registrados con el id " + id,
        }
      }
      return {
        error: false,
        code: 200,
        message: "Operacion exitosa",
        data: genero
      }
    } catch (error) {
      console.log(error.message);
      return {
        error: true,
        code: 500,
        message: "Error al obtener genero"
      }
    }
  }
    static async createGenero(nombre_genero) {
    try {
      const OBJGenero = new Genero();
      const genero = await OBJGenero.create(nombre_genero);
      return {
        error: false,
        code: 200,
        message: "Genero creada exitosamente",
        data: genero
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al crear el Genero"
      }
    }
  }
    static async actualizarGenero(nombre_genero, id) {
    try {
      const OBJGenero = new Genero();
      const genero = await OBJGenero.updateGenero(nombre_genero, id);
      return {
        error: false,
        code: 200,
        message: "Genero actualizado correctamente",
        data: genero
      }
    } catch (error) {
      console.log(error.data);
      
      return {
        error: true,
        code: 500,
        message: "No se puede actualizar el Genero"
      }
    }
  }
   static async eliminarGenero(id) {
    try {
      const OBJGenero = new Genero();
      const genero = await OBJGenero.deleteGenero(id)
      return {
        error: false,
        code: 200,
        message: "Genero eliminado correctamente",
        data: genero
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "No se puede eliminar la Genero"
      }

    }
  }
}

export default GeneroServicio;
         
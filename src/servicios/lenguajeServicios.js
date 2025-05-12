import LenguajeControlador from "../controlador/lenguajeControlador";
import Lenguaje from "../modelos/lenguaje.js";

class LenguajeServicio {
  static async allLenguaje() {
    try {
      const OBJLenguaje = new Lenguaje();
      const lenguaje = await OBJLenguaje.getAllLenguajes();
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
        data: usuarios,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener lenguaje",
      }
    }
  }
}

export default LenguajeServicio;


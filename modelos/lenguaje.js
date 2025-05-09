import connection from "../utils/db.js";

class Lenguaje {
    // constructor(nombre, descripcion) {
  
    //   this.nombre = nombre;
    //   this.descripcion = descripcion;
    // }
    /**
     * Metodo para obtener los registros de la base de datos
     * @returns {Array} Listado de la usuarios en un arreglo
     */
    async getAll() {
        try {
            const [result] = await connection.query("SELECT * FROM lenguaje_usuario");
            return result;
        } catch (error) {
            throw new Error("Error al obtener los usuarios");
        }
    }
}    

export default Lenguaje;
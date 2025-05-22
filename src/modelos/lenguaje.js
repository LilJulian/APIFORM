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
      const [result] = await connection.query("SELECT * FROM lenguaje");
      return result;
    } catch (error) {
      throw new Error("Error al obtener los lenguajes");
    }
  }
  async getById(id) {
    try {
      const [result] = await connection.query("select * from lenguaje where id_lenguaje = ?", [id])
      return result[0]
    } catch (error) {
      throw new Error("Error al obtener el lenguaje");
    }
  }
   async create(nombre_lenguaje) {
    try {
      const [result] = await connection.query(`insert into lenguaje (nombre_lenguaje) values (?);`, [nombre_lenguaje])
      return {
        id: result.id, nombre_lenguaje
      }
    } catch (error) {
      throw new Error("Error al insertar lenguaje");
    }
  }
  async updateLenguaje(nombre_lenguaje, id) {
    try {
      const [result] = await connection.query(`update lenguaje set nombre_lenguaje = ? where id_lenguaje     = ?`, [ nombre_lenguaje, id]);
      if (result.affectedRows === 0) {
        throw new Error("lenguaje no encontrado");
      }
      return {
        id: result.id,nombre_lenguaje
      }
    } catch (error) {
      throw new Error("Error al actualizar el lenguaje");
    }
  }
    async deleteLenguaje(id) {
    try {
      const [result] = await connection.query(`delete from lenguaje where id_lenguaje = ?`, [id]);
      return result;
    } catch (error) {
      throw new Error("Error al eliminar el lenguaje");
    }
  }
}

export default Lenguaje;
import connection from "../utils/db.js";

class Genero {
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
      const [result] = await connection.query("SELECT * FROM genero");
      return result;
    } catch (error) {
      throw new Error("Error al obtener los genero");
    }
  }
  async getById(id) {
    try {
      const [result] = await connection.query("select * from genero where id_genero = ?", [id])
      return result[0]
    } catch (error) {
      throw new Error("Error al obtener la genero");
    }
  }
   async create(nombre_genero) {
    try {
      const [result] = await connection.query(`insert into genero (nombre_genero) values (?);`, [nombre_genero])
      return {
        id: result.id, nombre_genero
      }
    } catch (error) {
      throw new Error("Error al insertar genero");
    }
  }
  async updateGenero(nombre_genero, id) {
    try {
      const [result] = await connection.query(`update genero set nombre_genero = ? where id_genero = ?`, [ nombre_genero, id]);
      if (result.affectedRows === 0) {
        throw new Error("genero no encontrada");
      }
      return {
        id: result.id,nombre_genero
      }
    } catch (error) {
      throw new Error("Error al actualizar la genero");
    }
  }
    async deleteGenero(id) {
    try {
      const [result] = await connection.query(`delete from genero where id_genero = ?`, [id]);
      return result;
    } catch (error) {
      throw new Error("Error al eliminar la genero");
    }
  }
}

export default Genero;
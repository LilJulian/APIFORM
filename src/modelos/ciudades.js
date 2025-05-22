import connection from "../utils/db.js";

class Ciudades {
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
      const [result] = await connection.query("SELECT * FROM ciudades");
      return result;
    } catch (error) {
      throw new Error("Error al obtener los ciudades");
    }
  }
  async getById(id) {
    try {
      const [result] = await connection.query("select * from ciudades where id_ciudad = ?", [id])
      return result[0]
    } catch (error) {
      throw new Error("Error al obtener la ciudad");
    }
  }
   async create(nombre_ciudad) {
    try {
      const [result] = await connection.query(`insert into ciudades (nombre_ciudad) values (?);`, [nombre_ciudad])
      return {
        id: result.id, nombre_ciudad
      }
    } catch (error) {
      throw new Error("Error al insertar ciudad");
    }
  }
  async updateCiudad(nombre_ciudad, id) {
    try {
      const [result] = await connection.query(`update ciudades set nombre_ciudad = ? where id_ciudad = ?`, [ nombre_ciudad, id]);
      if (result.affectedRows === 0) {
        throw new Error("ciudad no encontrada");
      }
      return {
        id: result.id,nombre_ciudad
      }
    } catch (error) {
      throw new Error("Error al actualizar la ciudad");
    }
  }
    async deleteCiudad(id) {
    try {
      const [result] = await connection.query(`delete from ciudades where id_ciudad = ?`, [id]);
      return result;
    } catch (error) {
      throw new Error("Error al eliminar la ciudad");
    }
  }
}

export default Ciudades;
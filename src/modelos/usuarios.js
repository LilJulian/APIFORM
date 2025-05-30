import connection from "../utils/db.js";

class Usuario {

  async getAll() {
    try {
      const [result] = await connection.query("SELECT * FROM usuarios");
      return result;
    } catch (error) {
      throw new Error("Error al obtener los usuarios");
    }
  }
  async getbyId(id) {
    try {
      const [traer] = await connection.query('select * from usuarios where id = ?', [id]);
      return traer[0];
    } catch (error) {
      throw new Error("Error al obtener la usuario");
    }
  }
  async create(nombre, apellido, telefono, documento, nombre_usuario, id_ciudad, id_genero) {
    try {
      const [result] = await connection.query(`insert into usuarios(nombre, apellido, telefono, documento, nombre_usuario, id_ciudad, id_genero) values 
        (?,?,?,?,?,?,?)`, [nombre, apellido, telefono, documento, nombre_usuario,  id_ciudad, id_genero])
      return {
        id: result.id, nombre, apellido, telefono, documento, nombre_usuario,  id_ciudad, id_genero
      }
    } catch (error) {
      throw new Error("Error al insertar usuario ");
    }
  }
  async updateUsuario(nombre, apellido, telefono, documento, nombre_usuario, id_ciudad, id_genero, id) {
    try {
      const [result] = await connection.query(`update usuarios set nombre = ?, apellido = ?, telefono = ?, documento = ?, nombre_usuario = ?, id_ciudad = ?, id_genero = ? where id = ?`, [nombre, apellido, telefono, documento, nombre_usuario, id_ciudad, id_genero, id]);
      if (result.affectedRows === 0) {
        throw new Error("usuario no encontrado");
      }
      return {
        id: result.id, nombre, apellido, telefono, documento, nombre_usuario, id_ciudad, id_genero
      }
    } catch (error) {
      throw new Error("Error al actualizar el usuario");
    }
  }
  async updatePatch(objeto, id) {
    try {
      const claves = Object.keys(objeto);
      const recClaves = claves.map(clave => `${clave} = ?`).join(", ");
      const valores = claves.map(clave => objeto[clave]);
      await connection.query(`update usuarios set ${recClaves} where id = ?`, [...valores, id]);
      const [rows] = await connection.query("select * from usuarios where id = ?", [id]);
      return rows;

    } catch (error) {
      throw new Error("Error al actualizar el usuario");
    }
  }
  async delete(id) {
    try {
      const [result] = await connection.query(`delete from usuarios where id = ?`, [id]);
      return result;
    } catch (error) {
      throw new Error("Error al eliminar usuario");
    }
  }
}

export default Usuario;
import connection from "../utils/db.js";

class Usuario {
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
            const [result] = await connection.query("SELECT * FROM usuarios");
            return result;
        } catch (error) {
            throw new Error("Error al obtener los usuarios");
        }
    }
    async create(nombre, apellido, telefono, documento, id_ciudad, id_genero) {
      try {
        const [result] = await connection.query(`insert into usuarios(nombre, apellido, telefono, documento, id_ciudad, id_genero) values 
        (?,?,?,?,?,?)`, [nombre, apellido, telefono, documento, id_ciudad, id_genero])
        return {
          id: result.id, nombre, apellido, telefono, documento, id_ciudad, id_genero
        }
      } catch (error) {
        throw new Error("Error al insertar usuario "  + error.message);
      }
    }
    async updateUsuario(nombre, apellido, telefono, documento, id_ciudad, id_genero, id) {
      try {
        const [result] = await connection.query(`update usuarios set nombre = ?, apellido = ?, telefono = ?, documento = ?, id_ciudad = ?, id_genero = ? where id = ?`, [nombre, apellido, telefono, documento, id_ciudad, id_genero, id]);
        if (result.affectedRows === 0) {
          throw new Error("usuario no encontrado");
        }
        return {
          id: result.id, nombre, apellido, telefono, documento, id_ciudad, id_genero
        }
      } catch (error) {
        throw new Error("Error al actualizar el usuario" + error.message);
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
        throw new Error("Error al actualizar el usuario" + error.message);
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
    async getbyId(id) {
      try {
        const [traer] = await connection.query('select * from usuarios where id = ?', [id]);
        return traer;
      } catch (error) {
        throw new Error("Error al obtener la usuario");
      }
    }
  }
  
  export default Usuario;
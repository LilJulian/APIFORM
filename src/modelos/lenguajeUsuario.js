import connection from "../utils/db.js";


class LenguajeUsuario {
  async getAll() {
    try {
      const [respuesta] = await connection.query("SELECT * FROM lenguaje_usuario");
      return respuesta;
    } catch (error) {
      throw new Error("Error al obtener los lenguajes de los usuarios");
    }
  }

  async getUsuarioById(id) {
    try {
      const [respuesta] = await connection.query(
        "SELECT * FROM lenguaje_usuario WHERE id_usuario = ?",
        [id]
      );
      return respuesta;
    } catch (error) {
      throw new Error("Error al obtener los lenguajes del usuario");
    }
  }

  async getLenguajeById(id) {
    try {
      const [respuesta] = await connection.query(
        "SELECT * FROM lenguaje_usuario WHERE id_lenguaje = ?",
        [id]
      );
      return respuesta;
    } catch (error) {
      throw new Error("Error al obtener los lenguajes del usuario");
    }
  }

  async createLenguajeUsuario(campos, valores, parametros) {
    try {
      const [respuesta] = await connection.query(
        `INSERT INTO lenguaje_usuario (${campos}) VALUES (${valores})`,
        parametros
      );
      return respuesta;
    } catch (error) {
      throw new Error("Error al registro");
    }
  }

    async actualizarUserById(campos, id) {
    try {
      const [respuesta] = await connection.query(`UPDATE lenguaje_usuario SET ${campos} WHERE id_usuario = ?`, id);

      return respuesta;
    } catch (error) {
      throw new Error("Error al actualizar el registro");
    }
  }


  async deleteUserById(id) {
    const [respuesta] = await connection.query(
      "DELETE FROM lenguaje_usuario WHERE id_usuario = ?",
      [id]
    );
    return respuesta;
  }
}

export default LenguajeUsuario;
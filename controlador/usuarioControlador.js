import Usuario from "../modelos/usuarios.js";

class UsuarioControlador {
    static getAllUsuario = async (req, res) => {
        const OBJUsuario = new Usuario();
        const usuario = await OBJUsuario.getAll();
        res.json(usuario);
    }
    static createusuario = async (req, res) => {
        try {
            const { nombre, apellido, telefono, documento, id_ciudad, id_genero } = req.body;
            const OBJUsuario = new Usuario();
            const usuario = await OBJUsuario.create(nombre, apellido, telefono, documento, id_ciudad, id_genero);
            res.status(201).json(usuario)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static actualizarusuario = async (req, res) => {
        try {
            const { id } = req.params
            const { nombre, apellido, telefono, documento, id_ciudad, id_genero } = req.body;
            const OBJUsuario = new Usuario();
            const usuario = await OBJUsuario.updateUsuario(nombre, apellido, telefono, documento, id_ciudad, id_genero, id)
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static actualizarParcialusuarios = async (req, res) => {
        try {
          const { id } = req.params
          const objeto = req.body;
          const OBJUsuario = new Usuario();
          const usuario = await OBJUsuario.updatePatch(objeto, id)
          res.status(201).json(usuario)
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }

    static deleteusuario = async (req, res) => {
        try {
          const {id} = req.params;
          const OBJUsuario = new Usuario();
          const usuario = await OBJUsuario.delete(id);
          res.status(201).json(usuario)
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
      static obtenerUsuarioId = async (req, res) => {
        try {
          const { id } = req.params;
          const OBJUsuario = new Usuario();
          const usuario = await OBJUsuario.getbyId(id);
          res.status(201).json(usuario)
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }
}

export default UsuarioControlador;
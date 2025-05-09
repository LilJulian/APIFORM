import express from "express";
import UsuarioControlador from "../controlador/usuarioControlador.js";


const ruta = express.Router();

ruta.get('/', UsuarioControlador.getAllUsuario);
ruta.post('/', UsuarioControlador.createusuario);
ruta.put('/:id', UsuarioControlador.actualizarusuario);
ruta.patch('/:id', UsuarioControlador.actualizarParcialusuarios);
ruta.delete('/:id', UsuarioControlador.deleteusuario);
ruta.get('/:id', UsuarioControlador.obtenerUsuarioId);


export default ruta;

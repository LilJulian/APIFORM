import express from "express";
import GeneroControlador from "../controlador/generoControlador.js";

const ruta = express.Router();

ruta.get('/', GeneroControlador.getAllGenero);
ruta.get('/:id', GeneroControlador.obtenerGeneroId);
ruta.post('/', GeneroControlador.creategenero);
ruta.put('/:id', GeneroControlador.actualizargenero);
ruta.delete('/:id', GeneroControlador.deletegenero);

export default ruta;

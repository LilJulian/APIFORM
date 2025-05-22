import express from "express";
import CiudadControlador from "../controlador/ciudadControlador.js";

const ruta = express.Router();

ruta.get('/', CiudadControlador.getAllCiudad);
ruta.get('/:id', CiudadControlador.obtenerCiudadId);
ruta.post('/', CiudadControlador.createciudad);
ruta.put('/:id', CiudadControlador.actualizarciudad);
ruta.delete('/:id', CiudadControlador.deleteciudad);

export default ruta;

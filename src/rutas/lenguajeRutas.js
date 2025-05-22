import express from "express";
import LenguajeControlador from "../controlador/lenguajeControlador.js";

const ruta = express.Router();

ruta.get('/', LenguajeControlador.getAllLenguajes);
ruta.get('/:id', LenguajeControlador.obtenerLenguajeId);
ruta.post('/', LenguajeControlador.createlenguaje);
ruta.put('/:id', LenguajeControlador.actualizarlenguaje);
ruta.delete('/:id', LenguajeControlador.deletelenguaje);

export default ruta;

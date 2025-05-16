import express from "express";
import LenguajeControlador from "../controlador/lenguajeControlador.js";

const ruta = express.Router();

ruta.get('/', LenguajeControlador.getAllLenguajes);
ruta.get('/:id', LenguajeControlador.obtenerLenguajeId);


export default ruta;

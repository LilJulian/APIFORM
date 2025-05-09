import express from "express";
import bodyParser from "body-parser";
import usuarioRutas from './src/rutas/usuarioRutas.js';
import lenguajeRutas from './src/rutas/lenguajeRutas.js';
import dotenv from "dotenv";

dotenv.config()

const ruta = express();

ruta.use(bodyParser.json());

ruta.use(express.urlencoded({ "extended": true }));
ruta.use("/usuarios", usuarioRutas);
ruta.use("/lenguajes", lenguajeRutas);

ruta.listen(3000, () => {
  console.log("Funciona bien");
});
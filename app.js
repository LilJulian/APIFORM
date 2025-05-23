import express from "express";
import bodyParser from "body-parser";
import usuarioRutas from './src/rutas/usuarioRutas.js';
import lenguajeRutas from './src/rutas/lenguajeRutas.js';
import ciudadRutas from './src/rutas/ciudadRutas.js';
import generoRutas from './src/rutas/generoRutas.js';
import lenguajeUsuarioRutas from './src/rutas/lenguajeUsuarioRuta.js'
import cors from "cors";
import dotenv from "dotenv";


dotenv.config()

const ruta = express();

ruta.use(bodyParser.json());
ruta.use(cors()); 

ruta.use(express.urlencoded({ "extended": true }));
ruta.use("/usuarios", usuarioRutas);
ruta.use("/lenguajes", lenguajeRutas);
ruta.use("/ciudades", ciudadRutas);
ruta.use("/generos", generoRutas);
ruta.use("/lenguaje-usuarios", lenguajeUsuarioRutas )

ruta.listen(3000, () => {
  console.log("Funciona bien");
});


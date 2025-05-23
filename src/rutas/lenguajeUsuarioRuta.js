import express from "express";
import LenguajeUsuarioControlador from "../controlador/lenguajeUsuarioControlador.js"



const router = express.Router();
// Creamos una instancia del controlador

// Obtener todos los lenguajes de los usuarios
router.get("/", LenguajeUsuarioControlador.getAllLenguajesUsuarios);

// Obtener un lenguaje por usuario ID
router.get("/usuario/:id", LenguajeUsuarioControlador.getUsuarioById);

// Crear un nuevo lenguaje para un usuario
router.post("/", LenguajeUsuarioControlador.createLenguajeUsuario);

// Actualizar un lenguaje del usuario por su ID
router.put("/usuario/:id", LenguajeUsuarioControlador.updateLenguajeUsuario);

// Actualizar parcialmente un lenguaje del usuario
router.patch("/usuario/:id", LenguajeUsuarioControlador.updateLenguajeUsuario);

// Eliminar un lenguaje del usuario por su ID
router.delete("/usuario/:id", LenguajeUsuarioControlador.deleteLenguajeUsuario);

export default router;
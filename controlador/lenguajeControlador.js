import Lenguaje from "../modelos/lenguaje.js";

class LenguajeControlador {
    static getAllLenguajes = async (req, res) => {
        const OBJLenguaje = new Lenguaje();
        const lenguaje = await OBJLenguaje.getAll();
        res.json(lenguaje);
    }
}    

export default LenguajeControlador;
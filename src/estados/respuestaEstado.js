export class RespuestaEstado {

  static hecho(res, data, message = "Operacion exitosa", status = 200) {
    return res.status(status).json({
      succes: true,
      code: status,
      message,
      data,
    });
  }

  static fallo(res, message = "Operacion fallida", status, error = []) {
    return res.status(status).json({
      succes: false,
      code: status,
      message,
      error: error
    });
  }
}
import mysql from "mysql2/promise";

// const connection = await mysql.createConnection({
//   host: "localhost",
//   user: "LilJulian",
//   password: "julidar123",
//   database: "apiform"
// }); 

const conection =await mysql.createConnection({
  host: "localhost",
  user:"valemidx",
  password:"luisa123",
  database:"apiform"
})

export default conection;
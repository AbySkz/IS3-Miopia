const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 3000;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
app.get("/", async (req, res) => {
  try {
    const dbRes = await pool.query("SELECT NOW()");
    res.send(`¡Servidor Node.js funcionando! Conexión a PostgreSQL exitosa. Hora en la BD: ${dbRes.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al conectar con la base de datos");
  }
});
app.listen(port, () => { console.log(`Aplicaci�n corriendo en http://localhost:${port}`); });

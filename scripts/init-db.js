const { db } = require('../src/database');

const sql = `
  CREATE TABLE IF NOT EXISTS incidencias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descripcion TEXT NOT NULL DEFAULT '',
    estado TEXT NOT NULL DEFAULT 'ABIERTA',
    fecha TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`;

try {
  db.exec(sql);
  console.log('Base de datos inicializada: tabla incidencias disponible.');
} catch (error) {
  console.error(`No se pudo inicializar la base de datos: ${error.message}`);
  process.exitCode = 1;
} finally {
  db.close();
}

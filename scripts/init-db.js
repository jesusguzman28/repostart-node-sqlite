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

  const { total } = db.prepare('SELECT COUNT(*) AS total FROM incidencias').get();
  if (total === 0) {
    const insert = db.prepare(
      'INSERT INTO incidencias (titulo, descripcion, estado) VALUES (?, ?, ?)'
    );
    const initialData = [
      ['La aplicación no inicia', 'El servicio termina durante el arranque.', 'ABIERTA'],
      ['Error al conectar con la base de datos', 'No se encuentra disponible el esquema requerido.', 'EN_REVISION'],
      ['El formulario no valida campos obligatorios', 'Se aceptan datos incompletos en el registro.', 'ABIERTA']
    ];

    db.exec('BEGIN');
    try {
      for (const incidence of initialData) insert.run(...incidence);
      db.exec('COMMIT');
    } catch (error) {
      db.exec('ROLLBACK');
      throw error;
    }
  }

  const { total: finalTotal } = db.prepare('SELECT COUNT(*) AS total FROM incidencias').get();
  console.log(`Base de datos inicializada: tabla incidencias con ${finalTotal} registros.`);
} catch (error) {
  console.error(`No se pudo inicializar la base de datos: ${error.message}`);
  process.exitCode = 1;
} finally {
  db.close();
}

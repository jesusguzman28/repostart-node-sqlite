const express = require('express');
const { port, databasePath } = require('./config');
const { all, run } = require('./database');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.json({ mensaje: 'RepoStart funcionando' });
});

app.get('/salud', (_request, response) => {
  response.json({ estado: 'OK', servicio: 'RepoStart' });
});

app.get('/incidencias', async (_request, response) => {
  try {
    const rows = await all('SELECT * FROM incidencias ORDER BY id DESC');
    response.json(rows);
  } catch (error) {
    console.error(`[ERROR BD] ${error.message}`);
    response.status(500).json({ error: 'No se pudieron consultar las incidencias', detalle: error.message });
  }
});

app.post('/incidencias', async (request, response) => {
  const { titulo, descripcion = '' } = request.body;
  if (!titulo) return response.status(400).json({ error: 'El título es obligatorio' });

  try {
    const result = await run(
      "INSERT INTO incidencias (titulo, descripcion, estado) VALUES (?, ?, 'ABIERTA')",
      [titulo, descripcion]
    );
    response.status(201).json({ id: result.id, titulo, descripcion, estado: 'ABIERTA' });
  } catch (error) {
    console.error(`[ERROR BD] ${error.message}`);
    response.status(500).json({ error: 'No se pudo registrar la incidencia', detalle: error.message });
  }
});

app.listen(port, () => {
  console.log(`RepoStart escuchando en http://localhost:${port}`);
  console.log(`Base de datos: ${databasePath}`);
});

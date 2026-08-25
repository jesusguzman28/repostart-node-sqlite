const { all, db } = require('../src/database');

async function diagnosticar() {
  try {
    await all('SELECT id FROM incidencias LIMIT 1');
    console.log('[CONFORME] La tabla incidencias existe y puede consultarse.');
  } catch (error) {
    console.error(`[NO CONFORME] ${error.message}`);
    process.exitCode = 1;
  } finally {
    db.close();
  }
}

diagnosticar();

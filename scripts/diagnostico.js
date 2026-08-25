const { verifySchema, db } = require('../src/database');

async function diagnosticar() {
  try {
    verifySchema();
    console.log('[CONFORME] El esquema requerido está disponible.');
  } catch (error) {
    console.error(`[NO CONFORME] ${error.message}`);
    process.exitCode = 1;
  } finally {
    db.close();
  }
}

diagnosticar();

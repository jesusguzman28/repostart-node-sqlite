const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');
const { databasePath } = require('./config');

fs.mkdirSync(path.dirname(databasePath), { recursive: true });

const db = new DatabaseSync(databasePath);

function all(sql, params = []) {
  return db.prepare(sql).all(...params);
}

function run(sql, params = []) {
  const result = db.prepare(sql).run(...params);
  return { id: Number(result.lastInsertRowid), changes: Number(result.changes) };
}

function verifySchema() {
  const table = db.prepare(
    "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'incidencias'"
  ).get();

  if (!table) {
    const error = new Error('Esquema de base de datos no disponible: falta la tabla incidencias');
    error.code = 'DB_SCHEMA_MISSING';
    throw error;
  }
}

module.exports = { db, all, run, verifySchema };

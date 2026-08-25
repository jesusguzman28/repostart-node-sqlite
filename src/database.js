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

module.exports = { db, all, run };

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Cria ou abre o arquivo escola.db na raiz do projeto
const dbPath = path.resolve(__dirname, '../../escola.db');
const db = new sqlite3.Database(dbPath);

// Inicializa a tabela caso ela não exista
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS estudantes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      dataNascimento TEXT NOT NULL,
      telefone TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS cursos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      cargaHoraria INTEGER,
      turno TEXT
    )
  `);

 db.run(`
    CREATE TABLE IF NOT EXISTS disciplina (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      codigo INTEGER,
      cargaHoraria INTEGER,
      curso_id INTEGER,
      FOREIGN KEY (curso_id) REFERENCES cursos(id)
    )
  `);

 db.run(`
    CREATE TABLE IF NOT EXISTS matriculas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      estudante_id INTEGER NOT NULL,
      curso_id INTERGER NOT NULL,
      numeroMatricula TEXT NOT NULL UNIQUE,
      dataMatricula TEXT NOT NULL,
      status TEXT DEFAULT 'ATIVA',
      FOREIGN KEY (estudante_id) REFERENCES estudantes(id),
      FOREIGN KEY (curso_id) REFERENCES cursos(id)


    )
  `);  



});

module.exports = db;

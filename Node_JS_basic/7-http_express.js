const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const csvPath = process.argv[2];

if (!csvPath) {
  console.error('Veuillez fournir un nom de fichier CSV en argument.');
  process.exit(1);
}

if (!fs.existsSync(csvPath)) {
  console.error(`Le fichier ${csvPath} n'existe pas.`);
  process.exit(1);
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

function readDatabase(csvPath) {
  return fs.promises.readFile(csvPath, 'utf8');
}

app.get('/students', async (req, res) => {
  res.type('text/plain');
  res.send('This is the list of our students');

  try {
    const data = await readDatabase(csvPath);
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    const firstnameIndex = headers.indexOf('firstname');
    const fieldIndex = headers.indexOf('field');

    const validLines = lines.slice(1).filter((line) => line.trim() !== '');
    const totalStudents = validLines.length;

    const studentsByField = validLines
      .map((line) => line.split(','))
      .reduce((acc, fields) => {
        const field = fields[fieldIndex];
        const firstname = fields[firstnameIndex];

        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(firstname);
        return acc;
      }, {});

    process.stdout.write(`Number of students: ${totalStudents}\n`);
    for (const [field, names] of Object.entries(studentsByField)) {
      process.stdout.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;

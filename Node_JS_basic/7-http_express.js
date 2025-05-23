const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function readDatabase(csvPath) {
  return fs.promises.readFile(csvPath, 'utf8');
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');

  const csvPath = process.argv[2];

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

    let response = "This is the list of our students\n";
    response += `Number of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(studentsByField)) {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    res.send(response.trim());
  } catch (err) {
    res.send('Cannot load the database');
  }
});

app.listen(port);
module.exports = app;

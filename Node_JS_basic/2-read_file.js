const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    const totalStudents = lines.length - 1;
    const firstnameIndex = headers.indexOf('firstname');
    const fieldIndex = headers.indexOf('field');

    const resultCS = lines.slice(1)
    .map(line => line.split(','))
    .filter(fields => fields[fieldIndex] === 'CS')
    .map(fields => fields[firstnameIndex]);

    const resultSWE = lines.slice(1)
    .map(line => line.split(','))
    .filter(fields => fields[fieldIndex] === 'SWE')
    .map(fields => fields[firstnameIndex]);

    process.stdout.write(`Number of students: ${totalStudents}\n`);
    process.stdout.write(`Number of students in CS: ${resultCS}\n`);
    process.stdout.write(`Number of students in CS: ${resultSWE}\n`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

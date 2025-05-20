function countStudents(path) {
const fs = require('node:fs');

try {
  const data = fs.readFileSync(path, 'utf8');
  const line = data.trim().split("\n");
  const headers = line[0].split(',');
  
  const totalStudents = line.length - 1;

  console.log(data);
  console.log(`Number of students: ${totalStudents}`)
} catch (err) {
  throw new Error('Cannot load the database');
}
}

module.exports = countStudents;

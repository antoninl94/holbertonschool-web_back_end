export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  // Ensure that name is a string
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  // Ensure that length is a number
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  // Ensure that students is an array of string
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw TypeError('Students must be an array of string');
    }
    for (const student of newStudents) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of string');
      }
    }
    this._students = newStudents;
  }
}

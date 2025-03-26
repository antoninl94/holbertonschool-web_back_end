export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = [];
    this.students = students;
  }

  get getName() {
    return this._name;
  }

  // Ensure that name is a string
  set changeName(newName) {
    this._name = newName;
    if (this._name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = _name;
    }
  }

  get getLength() {
    return this._length;
  }

  // Ensure that length is a number
  set changeLength(newLength) {
    this._length = newLength;
    if (this._length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = _length;
    }
  }

  get getStudents() {
    return this._students;
  }

  // Ensure that students is an array of string
  set changeStudents(newStudents) {
    if (!Array.isArray(this._students)) {
      throw TypeError('Students must be an array of string');
    }
    for (const student of _students) {
      if (typeof student !== 'string') {
        throw TypeError('Students must be an array of string');
      }
    }
    this._students = _students;
  }
}

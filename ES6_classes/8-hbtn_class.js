export default class HolbertonClass {
  constructor(size, location) {
    this._size = Number(size);
    this._location = String(location);
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

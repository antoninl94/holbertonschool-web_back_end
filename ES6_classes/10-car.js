export default class Car {
  constructor(brand = undefined, motor = undefined, color = undefined) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const ClonedCar = Object.getPrototypeOf(this).constructor;
    return new ClonedCar();
  }
}

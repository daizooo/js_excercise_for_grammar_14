class Person {
  constructor(name, age, gender, height, weight) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._height = height;
    this._weight = weight;
  }
}
const me = new Person('だいぞう', 25, 'オス', 175, 72);
console.log(me);

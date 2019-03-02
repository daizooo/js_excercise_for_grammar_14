class Person {
  constructor(name, age, gender, height, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }
};

const me = new Person("だいぞう", 25, "オス", 172, 73);

console.log(me);

class Player {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  get getAge() {
    return `${this.name} is age ${this.age}`;
  }
  get getHeight() {
    return `${this.name} is height ${this.height}`;
  }
  get getWeight() {
    return `${this.name} is weight ${this.weight}`;
  }
}

let p1 = new Player("Neko", 13, 41, 52);
let p2 = new Player("Nesto", 34, 53, 64);
console.log(p2.getHeight);

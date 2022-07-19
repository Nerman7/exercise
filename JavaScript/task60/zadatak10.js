class Person {
  constructor(lastName, profesion) {
    this.lastName = lastName;
    this.profesion = profesion;
  }

  sayMyName() {
    console.log(`Ja sam ${this.lastName} a prezime mi je ${this.profesion}`);
  }
}

class Proffesor extends Person {
  constructor(lastName, teach) {
    super(lastName);
    this.teach = teach;
  }
  introduceSelf() {
    console.log(
      `My name is ${this.lastName}, and I will be your ${this.teach} professor.`
    );
  }
}

let jusuf = new Proffesor("Jusuf", "history");

let ner = new Person("Kov", "prof");
console.log(ner);
ner.sayMyName();

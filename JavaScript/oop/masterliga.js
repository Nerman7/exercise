/* Masterliga zadatak

Napravi klasu igrac, igrac ima ime, prezime, broj dresa, staminu, brzinu, visinu, broj golova.
Napravi tim koji ima ime, broj poena na tabeli, niz od 3 igraca.
Napravi Ligu koja ima ime, drzavu lige i niz od 3 timova.

Ispisati tim koji ima najvise poena na tabeli, igraca koji je postigao najvise golova.
Ispisati tim koji je zadnji na tabeli. */

class Player {
  constructor(
    name,
    lastName,
    numOfShirt,
    stamina,
    speed,
    height,
    numOfGoalsScored
  ) {
    this.name = name;
    this.lastName = lastName;
    this.numOfShirt = numOfShirt;
    this.stamina = stamina;
    this.speed = speed;
    this.height = height;
    this.numOfGoalsScored = numOfGoalsScored;
  }
}

class Team {
  constructor(name, numOfPoints) {
    this.name = name;
    this.numOfPoints = numOfPoints;
    this.players = [];
  }
  playersToTeam(player) {
    this.players.push(player);
  }
}

class League {
  constructor(name, country) {
    this.name = name;
    this.country = country;
    this.league = [];
  }
  teamsToLeague(team) {
    this.league.push(team);
  }
}

let messi = new Player("Lionel", "Messi", 10, 97, 90, 169, 25);
let ronaldo = new Player("Ronaldo", "Nazario", 9, 99, 92, 179, 5);
let rivaldo = new Player("Rivaldo", "Hasan", 8, 77, 78, 180, 17);

let benzema = new Player("Karim", "Benzema", 10, 54, 70, 189, 15);
let ramos = new Player("Sergio", "Ramos", 19, 69, 52, 188, 12);
let pepe = new Player("Pepe", "Mesar", 18, 67, 56, 87, 27);

let pjanic = new Player("Miralem", "Pjanic", 11, 66, 66, 176, 22);
let junino = new Player("Junino", "Pern", 29, 34, 56, 190, 15);
let lopez = new Player("Lopez", "Loan", 28, 38, 55, 187, 13);

let barcelona = new Team("Barcelona", 34);
let real = new Team("Real Madrid", 29);
let lyon = new Team("Lyon", 16);

barcelona.playersToTeam(messi);
barcelona.playersToTeam(ronaldo);
barcelona.playersToTeam(rivaldo);

real.playersToTeam(benzema);
real.playersToTeam(ramos);
real.playersToTeam(pepe);

lyon.playersToTeam(pjanic);
lyon.playersToTeam(junino);
lyon.playersToTeam(lopez);

let championsLeague = new League("Champions League", "Evropa");

championsLeague.teamsToLeague(barcelona);
championsLeague.teamsToLeague(real);
championsLeague.teamsToLeague(lyon);

let arr = [];

for (let i = 0; i < championsLeague.league.length; i++) {
  arr.push(championsLeague.league[i].numOfPoints);
}

let biggestPoints = 0;

for (let i = 0; i < arr.length; i++) {
  if (biggestPoints < arr[i]) {
    biggestPoints = arr[i];
  }
}
let index = arr.indexOf(biggestPoints);

//console.log(`Najvise bodova ima ${championsLeague.league[index].name}.`)

let arr2 = [];
for (let i = 0; i < championsLeague.league.length; i++) {
  for (let j = 0; j < championsLeague.league.length; j++) {
    arr2.push(championsLeague.league[i].players[j].numOfGoalsScored);
  }
}
console.log(championsLeague);
var biggestNumOfGoals = 0;
for (let i = 0; i < arr2.length; i++) {
  if (biggestNumOfGoals < arr2[i]) {
    biggestNumOfGoals = arr2[i];
  }
}
var indexNumOfGoals = arr2.indexOf(biggestNumOfGoals);
//console.log(championsLeague)
console.log(indexNumOfGoals)
//console.log(championsLeague.league[i].players[indexNumOfGoals])
console.log(`Najvise postignutih golova ima ${championsLeague.league}.`)

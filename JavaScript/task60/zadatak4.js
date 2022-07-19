/*Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

Person	       Relation
Darth Vader	    father
Leia	        sister
Han	            brother in law
R2D2	        droid

Examples
relationToLuke("Darth Vader") ➞ "Luke, I am your father."

relationToLuke("Leia") ➞ "Luke, I am your sister."

relationToLuke("Han") ➞ "Luke, I am your brother in law."*/

function relationToLuke(name) {
  let starWars = {
    father: "Darth Vader",
    sister: "Leia",
    brotherInLaw: "Han",
    droid: "R2D2",
  };
  let vrijednosti = Object.values(starWars);

  let kljucevi = Object.keys(starWars);

  for (let i = 0; i < vrijednosti.length; i++) {
    if (vrijednosti[i] == name) {
      return `Luke, I am your ${kljucevi[i]}.`;
    }
  }
}

console.log(relationToLuke("R2D2"));

/*Write the function isEmpty(obj) which returns true if the object has no properties, 
false otherwise.
Should work like that:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false*/

function isEmpty(prop) {
  for (let key in prop) {
    return false;
  }
  return true;
}

nerman = { name: "nera" };
console.log(isEmpty(nerman));

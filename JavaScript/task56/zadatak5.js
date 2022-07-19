let sif = [];
function password(pass) {
  sif = pass.split("");

  if (sif.length >= 8 && sif.length < 20) {
    for (let i = 0; i < sif.length; i++) {
      if (sif[i] == sif[i].toLowerCase() && sif[i] == sif[i].toUpperCase()) {
      }
      if (typeof sif[i] === "number");
      return `moze proci`;
    }
  } else {
    return `ne moye proci`;
  }
}
console.log(password("AZRA HAsIC"));

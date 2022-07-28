/*Kreirajte funkciju koja vraća površinu presjeka dva pravougaonika. Funkcija će dobiti
dva pravougaonika, svaki sa koordinatama dva svoja suprotna ugla.*/

function overlappingRectangles(rect1, rect2) {
  for (let i = 0; i < rect1.length; i++) {
    var rect1XInitialStart = rect1[0].x;
    var rect1YInitialStart = rect1[0].y;
    var rect1XEnd = rect1[1].x;
    var rect1YEnd = rect1[1].y;
  }
  for (let i = 0; i < rect2.length; i++) {
    var rect2XInitialStart = rect2[0].x;
    var rect2YInitialStart = rect2[0].y;
    var rect2XEnd = rect2[1].x;
    var rect2YEnd = rect2[1].y;
  }

  let sideXRect1 = Math.abs(rect1XInitialStart - rect1XEnd);
  let sideYRect1 = Math.abs(rect1YInitialStart - rect1YEnd);
  let areaOfFirstRectangle = sideXRect1 * sideYRect1;

  let sideXRect2 = Math.abs(rect2XInitialStart - rect2XEnd);
  let sideYRect2 = Math.abs(rect2YInitialStart - rect2YEnd);
  let areaOfSecondRectangle = sideXRect2 * sideYRect2;

  let sumOfTwoRect = areaOfFirstRectangle + areaOfSecondRectangle;

  let overlappRectXside =
    Math.min(rect1XEnd, rect2XEnd) -
    Math.max(rect1XInitialStart, rect2XInitialStart);
  let overlappRectYside =
    Math.min(rect1YEnd, rect2YEnd) -
    Math.max(rect1YInitialStart, rect2YInitialStart);

  var sumOFoverlappingRectangle = overlappRectXside * overlappRectYside;
  if (overlappRectXside < 0 || overlappRectYside < 0) {
    return "Ne poklapaju se ova dva pravougaonika.";
  }
  return ` Povrsina preklapajuceg pravougaonika je ${sumOFoverlappingRectangle}.`;
}

console.log(
  overlappingRectangles(
    [
      { x: 2, y: 1 },
      { x: 5, y: 5 },
    ],
    [
      { x: 3, y: 2 },
      { x: 5, y: 7 },
    ]
  )
);

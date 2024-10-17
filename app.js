//Create Square and return the Square
function createSquare() {
  const NEWSQUARE = document.createElement("div");
  NEWSQUARE.className = "square";
  return NEWSQUARE;
}

//Create a Row add squares to it and return the Row
function createRow(NumberOfSquares) {
  const NEWROW = document.createElement("div");
  NEWROW.className = "row";

  //create and append squares
  for (let i = 1; i <= NumberOfSquares; i++) {
    NEWROW.appendChild(createSquare());

    if (i >= NumberOfSquares) {
      return NEWROW;
    }
  }
}

//Create the Grid
function createGrid(rowsAndSquares) {
  const CONTAINER = document.getElementById("container");

  //Only allow the user to make 100 rows and 100 Squares in each row
  if (rowsAndSquares <= 100 && rowsAndSquares > 1) {
    // Check if the Container Has Children and remove them;
    if (CONTAINER.hasChildNodes) {
      CONTAINER.replaceChildren();
    }

    //create rows
    for (let i = 1; i <= rowsAndSquares; i++) {
      CONTAINER.appendChild(createRow(rowsAndSquares));
    }
  } else {
  }
}

//generate a random hexidecimal number
// found the formula for generating the hexidecimal here: https://css-tricks.com/snippets/javascript/random-hex-color/
function getNewColor() {
  let newColor = Math.floor(Math.random() * 16777215).toString(16);
  newColor = `#${newColor}`;
  return newColor;
}

document.getElementById("generate-grid").addEventListener("click", function () {
  const GETUSERINPUT = document.getElementById("get-user-input").value;
  const ERRORMESSAGE = document.getElementById("error-message");
  const MESSAGE = document.createElement("p");
  if (GETUSERINPUT >= 2 && GETUSERINPUT <= 100) {
    createGrid(GETUSERINPUT);
    if (ERRORMESSAGE.hasChildNodes) {
      ERRORMESSAGE.replaceChildren();
    }
  } else {
    MESSAGE.textContent =
      "Grid values must not be less than 2 or greater than 100";
    ERRORMESSAGE.replaceChildren();
    ERRORMESSAGE.appendChild(MESSAGE);
  }
});

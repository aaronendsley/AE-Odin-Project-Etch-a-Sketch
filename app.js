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

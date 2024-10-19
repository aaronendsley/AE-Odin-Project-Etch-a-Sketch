//Create Square and return the Square
function createSquare() {
  const NEWSQUARE = document.createElement("div");
  NEWSQUARE.className = "square";

  //Give the square a color if it does not have a color
  NEWSQUARE.addEventListener("mouseover", function () {
    if (!NEWSQUARE.style.backgroundColor) {
      NEWSQUARE.style.backgroundColor = `${getNewColor()}`;
    } else {
      //get the color and add 10 to the opacity
      let color = NEWSQUARE.style.backgroundColor.split(",");
      if (color[3]) {
        color[0] = color[0].split("(")[1];
        color[3] = color[3].split(")")[0];
        color[3] = (Number(color[3]) + 0.1).toFixed(2);
        color = `rgba(${color.join(",")})`;
        NEWSQUARE.style.backgroundColor = color;
      }
    }
  });
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
  //Found this formula here https://gist.github.com/kettuniko/1b72bd4862797f1039c8
  const RANDOMNUMBER = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const RANDOMBYTE = () => RANDOMNUMBER(0, 255);
  const RANDOMPERCENT = (0.5).toFixed(2);
  const RANDOMCSSRGBA = () =>
    `rgba(${[RANDOMBYTE(), RANDOMBYTE(), RANDOMBYTE(), RANDOMPERCENT].join(
      ","
    )})`;

  let newColor = RANDOMCSSRGBA();

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

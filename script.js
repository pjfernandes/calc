/////////////////////////////////////////////////////////////Functions
const populateDisplay = ((input, screen) => {
  const display = document.querySelector(`.${screen}`);
  display.innerText = `${display.innerText}${input}`;
});

const getNumber = ((screen) => {
  const display = document.querySelector(`.${screen}`);
  return Math.abs(parseFloat(display.innerText.match(/[1-9]\d*(\.\d+)?$/)[0]));
});

const clearDisplay = ((screen) => {
  const display = document.querySelector(`.${screen}`);
  display.innerText = "";
})

const getOperator = ((screen) => {
  const display = document.querySelector(`.${screen}`);
  return display.innerText[0];
});

const getDisplay = ((screen) => {
  const display = document.querySelector(`.${screen}`);
  return parseFloat(display.innerText);
});
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////Clear button event
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  clearDisplay("last");
  clearDisplay("next");

  nextNum = undefined;
  first = true;
});
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////Operations
let nextNum;
let first = true;

const keys = document.querySelectorAll(".num");
keys.forEach((element) => {
  element.addEventListener("click", (event) => {
    populateDisplay(event.target.innerText, "next");
    if (first) {
      nextNum = getNumber("next");
     };
  });
});

const operations = document.querySelectorAll(".op")
operations.forEach((element) => {
  element.addEventListener("click", (event) => {

    if (first) {
      nextNum = nextNum;
      first = false;
    } else {
      nextNum = operate(nextNum, getNumber("next"), getOperator("next"));
    }
    clearDisplay("last");
    populateDisplay(nextNum, "last");
    clearDisplay("next");
    populateDisplay(event.target.innerText, "next");
  });
});

const equals = document.querySelector(".equals")
equals.addEventListener("click", (event) => {
  clearDisplay("last");
  populateDisplay(
    operate(nextNum, getNumber("next"), getOperator("next")
    ), "last");
  clearDisplay("next");

});

const dot = document.querySelector(".dot");
dot.addEventListener("click", (event) => {
  populateDisplay(".", "next");
});

/////////////////////////////////////////////////Operations functions
function add(x, y) {
  return x+y;
}

function subtract(x, y) {
  return x-y;
}

function multiply(x, y) {
  return x*y;
}

function divide(x, y) {
  if (y !== 0) {
  return x/y;
  } else {
    "Error"
  }
}

function operate(x, y, op) {

  if (op === "+") {
      return add(x, y);
  } else if (op === "-") {
      return subtract(x, y);
  } else if (op === "x") {
      return multiply(x, y);
  } else if (op === "/") {
      return divide(x, y);
  }

}
////////////////////////////////////////////////////////////////////

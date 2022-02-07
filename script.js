/////////////////////////////////////////////////////////////Functions
const populateDisplay = ((input, screen) => {
  const display = document.querySelector(`.${screen}`);
  display.innerText = `${display.innerText}${input}`;
});

const getNumber = ((screen) => {
  const display = document.querySelector(`.${screen}`);
  return Math.abs(parseFloat(display.innerText.match(/[0-9]/)[0]));
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
  return display.innerText;
});
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////Clear button event
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  clearDisplay("last");
  clearDisplay("next");
  numbers = [];
  operator = [];
  nextNum = undefined;
  first = true;
});
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////Operations
let numbers = [];
let operator = [];

let nextNum;
let first = true;

const keys = document.querySelectorAll(".num");
keys.forEach((element) => {
  element.addEventListener("click", (event) => {
    populateDisplay(event.target.innerText, "next");
    if (first) {
      nextNum = getNumber("next")
     };
  });
});

const operations = document.querySelectorAll(".op")
operations.forEach((element) => {
  element.addEventListener("click", (event) => {
    //nextNum = nextNum + getNumber("next");
    if (first) {
      nextNum = nextNum;
      first = false;
    } else {
      nextNum = operate(nextNum, getNumber("next"), event.target.innerText);
    }
    clearDisplay("last");
    populateDisplay(nextNum, "last");
    clearDisplay("next");
    populateDisplay(event.target.innerText, "next");
    operator.push(getOperator("next"));
  });
});

const equals = document.querySelector(".equals")
equals.addEventListener("click", (event) => {
  numbers.push(getNumber("next"));
  //operator.push(getOperator("next"));
  populateDisplay(getDisplay("next"), "last")
  clearDisplay("next");

  console.log(operator);
  console.log(numbers);


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
  return x/y;
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

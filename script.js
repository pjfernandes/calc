//Functions
const populateDisplay = ((input) => {
  const display = document.querySelector(".display");
  display.innerText = `${display.innerText}${input}`;
});

const getNumber = (() => {
  const display = document.querySelector(".display");
  return parseFloat(display.innerText);
});

const clearDisplay = (() => {
  const display = document.querySelector(".display");
  display.innerText = "";
})

const getOperator = (() => {
  const display = document.querySelector(".display");
  return display.innerText[0];
});

//Clear button event
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  clearDisplay();
});

//Operations
let numbers = [];
let operator;

const keys = document.querySelectorAll(".num");
keys.forEach((element) => {

  element.addEventListener("click", (event) => {
    populateDisplay(event.target.innerText);
  });

});

const operations = document.querySelectorAll(".op")
operations.forEach((element) => {
  element.addEventListener("click", (event) => {
    numbers.push(getNumber());
    clearDisplay();
    populateDisplay(event.target.innerText);
  });
});

const equals = document.querySelector(".equals")

equals.addEventListener("click", (event) => {
  numbers.push(getNumber());
  operator = getOperator();
  console.log(operator);
});

let lastInput;
let newInput;

const populateDisplay = ((input) => {
  const display = document.querySelector(".display");
  display.innerText = `${display.innerText}${input}`;
});

const keys = document.querySelectorAll(".key");
keys.forEach((element) => {
  element.addEventListener("click", (event) => {
    const key = element;
    populateDisplay(key.id);
  });
});

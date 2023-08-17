let firstNum;
let secondNum;
let operator;

let displayValue = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number-button");
const clearBtn = document.querySelector(".clear-button");
const operatorBtns = document.querySelectorAll(".operator-button");
const signToggle = document.querySelector(".sign-toggle");

numberBtns.forEach((e) => {
  e.addEventListener("click", () => {
    if (displayValue.value === "0") displayValue.value = "";
    displayValue.value += e.textContent;
  });
});

operatorBtns.forEach((e) => {
  e.addEventListener("click", () => {
    firstNum = Number(displayValue.value);
    console.log(firstNum);
  });
});

clearBtn.addEventListener("click", () => {
  displayValue.value = "0";
});

signToggle.addEventListener("click", () => {
  if (displayValue.value === "0") return;

  Number(displayValue.value) > 0
    ? (displayValue.value = `-${displayValue.value}`)
    : (displayValue.value = displayValue.value.slice(1));
});

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return addition(a, b);
    case "-":
      return subtraction(a, b);
    case "×":
      return multiplication(a, b);
    case "/":
      division(a, b);
  }
}

let firstNum;
let secondNum;
let operator;

let clearDisplayNextInput = true;
let operationChain = false;
let equalsChain = false;

let displayValue = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number-button");
const clearBtn = document.querySelector(".clear-button");
const operatorBtns = document.querySelectorAll(".operator-button");
const signToggle = document.querySelector(".sign-toggle");
const equalsBtn = document.querySelector("#equals");

numberBtns.forEach((e) => {
  e.addEventListener("click", () => {
    if (displayValue.value === "0") displayValue.value = "";
    if (clearDisplayNextInput === true) {
      displayValue.value = "";
      clearDisplayNextInput = false;
    }
    displayValue.value += e.textContent;
  });
});

operatorBtns.forEach((e) => {
  e.addEventListener("click", () => {
    if (operator != null) {
      operator = e.textContent;
      firstNum = Number(displayValue.value);
      operationChain = true;
      clearDisplayNextInput = true;
      return;
    }

    if (operationChain === true) {
      secondNum = Number(displayValue.value);
      operator = e.textContent;
      displayValue.value = operate(firstNum, secondNum, operator);
    }

    firstNum = Number(displayValue.value);
    operator = e.textContent;
    clearDisplayNextInput = true;
    operationChain = true;
  });
});

clearBtn.addEventListener("click", clearCalc);

signToggle.addEventListener("click", () => {
  if (displayValue.value === "0") return;

  Number(displayValue.value) > 0
    ? (displayValue.value = `-${displayValue.value}`)
    : (displayValue.value = displayValue.value.slice(1));
});

equalsBtn.addEventListener("click", () => {
  // FIGURE THIS OUT!!

  // if (equalsChain) {
  //   console.log("test");
  //   let constantNum = secondNum;
  //   operate(firstNum, constantNum, operator);
  //   console.log(constantNum);
  //   return;
  // }
  secondNum = Number(displayValue.value);
  displayValue.value = operate(firstNum, secondNum, operator);
  operate(firstNum, secondNum, operator);
  clearDisplayNextInput = true;
  operationChain = false;
  equalsChain = true;
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
  if (b === 0) {
    return "Infinity???? Trying to divide by 0 I see...";
  }
  return a / b;
}

function operate(a, b, operator) {
  console.log(a, operator, b);
  switch (operator) {
    case "+":
      return addition(a, b);
    case "-":
      return subtraction(a, b);
    case "×":
      return multiplication(a, b);
    case "÷":
      return division(a, b);
  }
}

function clearCalc() {
  displayValue.value = "0";
  firstNum = null;
  secondNum = null;
  operator = null;
  equalsChain = false;
}

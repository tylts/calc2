let firstNum = 0;
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
const decimalBtn = document.querySelector(".decimal-button");

numberBtns.forEach((e) => {
  e.addEventListener("click", () => {
    if (displayValue.value === "0") displayValue.value = "";
    if (clearDisplayNextInput === true) {
      displayValue.value = "";
      clearDisplayNextInput = false;
    }
    if (firstNum || firstNum === 0) {
      displayValue.value += e.textContent;
      secondNum = Number(displayValue.value);
      return;
    }
    displayValue.value += e.textContent;
  });
});

decimalBtn.addEventListener("click", () => {
  if (displayValue.value.includes(".") && clearDisplayNextInput === false) {
    return;
  }

  if (clearDisplayNextInput === true) {
    displayValue.value = "0.";
    clearDisplayNextInput = false;
    return;
  }
  displayValue.value += decimalBtn.textContent;
});

operatorBtns.forEach((e) => {
  e.addEventListener("click", () => {
    if (operationChain === true) {
      secondNum = Number(displayValue.value);
      displayValue.value = Number(
        operate(firstNum, secondNum, operator).toFixed(7)
      );
      operator = e.textContent;
    }

    if (operator != null) {
      operator = e.textContent;
      firstNum = Number(displayValue.value);
      if (displayValue.value === "divide by 0? lol") firstNum = 0;
      operationChain = true;
      clearDisplayNextInput = true;
      equalsChain = false;
      return;
    }

    operator = e.textContent;
    clearDisplayNextInput = true;
    operationChain = true;
    equalsChain = false;
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
  if (isNaN(firstNum) || isNaN(secondNum) || !operator) {
    console.log(firstNum, operator, secondNum);
    clearCalc();
    displayValue.value = "You messed up.";
    console.log("triggered in equals");
    return;
  }
  if (equalsChain) {
    let constantNum = secondNum;
    firstNum = Number(displayValue.value);
    displayValue.value = Number(
      operate(firstNum, constantNum, operator).toFixed(7)
    );
    return;
  }

  displayValue.value = Number(
    operate(firstNum, secondNum, operator).toFixed(7)
  );
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
  return a / b;
}

function operate(a, b, operator) {
  if (b === 0 && operator === "÷") {
    clearCalc();
    displayValue.value = "divide by 0? lol";
    return 0;
  }

  if (isNaN(a) || isNaN(b) || !operator) {
    clearCalc();
    displayValue.value = "You messed up.";
    console.log("triggered in operate()");
    return;
  }
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
  firstNum = 0;
  secondNum = 0;
  equalsChain = false;
  clearDisplayNextInput = true;
  operationChain = false;
}

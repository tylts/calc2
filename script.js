let firstNum;
let secondNum;
let operator;

const btns = document.querySelectorAll("button");

btns.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(`${e.textContent}`);
  });
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

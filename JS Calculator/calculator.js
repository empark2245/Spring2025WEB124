function addition() {
  const num = parseInt(document.getElementById("num").value);
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${num} + ${i} = ${num + i}<br>`;
  }
  document.getElementById("addition").innerHTML = result;
}

function subtraction() {
  const num = parseInt(document.getElementById("num").value);
  let result = "";
  let i = 1;
  while (i <= 10) {
    result += `${num} - ${i} = ${num - i}<br>`;
    i++;
  }
  document.getElementById("subtraction").innerHTML = result;
}

function multiplication() {
  const num = parseInt(document.getElementById("num").value);
  let result = "";
  let i = 1;
  do {
    result += `${num} × ${i} = ${num * i}<br>`;
    i++;
  } while (i <= 10);
  document.getElementById("multiplication").innerHTML = result;
}

function division() {
  const num = parseInt(document.getElementById("num").value);
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${num} ÷ ${i} = ${(num / i).toFixed(2)}<br>`;
  }
  document.getElementById("division").innerHTML = result;
}

function calculateAll() {
  addition();
  subtraction();
  multiplication();
  division();
}

document.getElementById("calcBtn").addEventListener("click", calculateAll);

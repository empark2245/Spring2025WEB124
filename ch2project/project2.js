// Author: Emily Parker | Date: 03/09/2025

// 1. Create and initialize a string variable with my full name
let myName = "Emily Parker";

// 2. Select paragraph 1 and set its content to my name
let para1 = document.getElementById("p1");
para1.textContent = myName;

// 3. Create and initialize two number variables
let n1 = 12;
let n2 = 8;

// 4. Add the two numbers and display in paragraph 2
let numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

// 5. Multiply the two numbers and display in paragraph 3
let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

// 6. Concatenate my name with one of the numeric variables and display in paragraph 4
let myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

// 7. Multiply my name with one of the numeric variables and display in paragraph 5 (NaN expected)
let myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

// 8. Compare my age to the multiplication of the two numbers and display in paragraph 6
let myAge = 18;
let ageCompare = myAge > numberMult;
document.getElementById("p6").textContent = ageCompare;

// 9. Modify n1 and n2 values to observe changes
n1 = 15;
n2 = 5;

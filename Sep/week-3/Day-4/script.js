//Store a student's marks in 5 subjects. Calculate the total marks and percentage
function parent() {
  console.log("Marks of a student");
  let math = 92;
  let english = 80;
  let odia = 78;
  let science = 97;
  let gk = 87;

  function child() {
    console.log("marks secured:", math + english + odia + science + gk);
    console.log("Percentage:",((math + english + odia + science + gk)/500)* 100 );
  }
  return child;
}

parent()();

//A product costs ₹1200 and has a 15% discount. Calculate the discount amount and final price.
let product_cost = 1200;
let discount = "15%";
let discount_Amount = 1200 * 0.15;
let final_price = product_cost - discount_Amount ;
console.log(discount_Amount)
console.log(final_price);

//Take a number and determine its square and cube using operators.
let a = 5;
let square_Of_a = a**2;
console.log(square_Of_a);

let cube_Of_a = a**3;
console.log(cube_Of_a);

//Take a number and check whether it is positive, negative, or zero.

let num = 0;

if(num >0){
    console.log("This is positive number")
}else if (num <0) {
  console.log("This is negative number");
} else {
  console.log("The number is zero");
}

// Take a student's marks and display:
//- `90–100` → A
//- `80–89` → B
//- `70–79` → C
//- `60–69` → D
//- Below `60` → Fail
let stdScore = 96;
if (stdScore >= 90 && stdScore <= 100) {
  console.log("A");
} else if (stdScore >= 80 && stdScore <= 89) {
  console.log("B");
} else if (stdScore >= 70 && stdScore <= 79) {
  console.log("C");
} else if (stdScore >= 60 && stdScore <= 69) {
  console.log("D");
} else {
  console.log("Fail");
}

// Take a number and check whether it is **even or odd**.

let number = 7;
if(number % 2 == 0){
    console.log("This is even number")
} else {
  console.log("This is odd number");
}

// Take three numbers and find the **largest number** using conditional statements.

let A = 10;
let B = 25;
let C = 15;

let largest;

if (A >= B && A >= C) {
    largest = A;
} else if (B >= A && B >= C) {
    largest = B;
} else {
    largest = C;
}

console.log("The largest number is: " , largest);

//3. Print the following pattern:
//1
//12
//123
//1234
//12345

for( let i = 1; i<= 5; i++){
  let pattern ="";

  for (let j = 1;j<=i;j++){
    pattern += j;
  }
  console.log(pattern);
}

// Count how many numbers between `1` and `100` are **divisible by both 3 and 5**.

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        count++;
    }
}

console.log("Count:", count);

// Take a number and calculate its **factorial**.

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log("Factorial:", factorial);

// Create a function that takes a number and prints its **multiplication table**.

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

multiplicationTable(5);

// Create a function that takes two numbers and returns their **sum**.

function addition(a, b) {
    return a + b;
}

let result = addition(10, 20);

console.log("Sum:", result);

// **ATM Simulation**
//Create a simple ATM program with:

//- Initial balance = ₹10,000
//- Deposit
//- Withdraw
//- Check balance

let balance = 10000;

let choice = prompt(
    "ATM Menu\n" +
    "1. Deposit\n" +
    "2. Withdraw\n" +
    "3. Check Balance\n" +
    "4. Exit\n\n" +
    "Enter your choice:"
);

switch (choice) {
    case "1":
        let deposit = Number(prompt("Enter deposit amount:"));
        balance = balance + deposit;
        console.log("Amount deposited successfully.");
        console.log("Current Balance: ₹" + balance);
        break;

    case "2":
        let withdraw = Number(prompt("Enter withdrawal amount:"));

        if (withdraw <= balance) {
            balance = balance - withdraw;
            console.log("Please collect your cash.");
            console.log("Current Balance: ₹" + balance);
        } else {
            console.log("Insufficient balance.");
        }
        break;

    case "3":
        console.log("Current Balance: ₹" + balance);
        break;

    case "4":
        console.log("Thank you for using the ATM.");
        break;

    default:
        console.log("Invalid choice.");
}
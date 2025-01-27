//Task 1 - Employee Information
let employeeName = "Madisyn Notz";
console.log(employeeName, typeof employeeName);
 
const employeeID = 12345;
console.log(employeeID, typeof employeeID);
 
var isActive = true;
console.log(isActive, typeof isActive);

//Task 2 - Product Details
let productName = "Textbook"
const productPrice = 70.98;
var isAvailable = true;


console.log(productName, typeof productName);
console.log(productPrice, typeof productPrice);
console.log(isAvailable, typeof isAvailable);

//Task 3 - Financial transactions
let accountBalance = 1000;


accountBalance +=300
console.log("After adding 300:", accountBalance);


accountBalance -=100;
console.log("After subtracting 100:", accountBalance);


accountBalance *=2;
console.log("after multiplying by 2:", accountBalance);


accountBalance /= 4;
console.log("After dividing by 4:", accountBalance)

//Task 4 - Customer Messaging
let customerName = "Matt";


let welcomeMessage = "Hello, " + customerName + "!Welcome to the store.";
console.log (welcomeMessage);

//Task 5 - Access Control
let isLoggedIn = true;


if (isLoggedIn) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

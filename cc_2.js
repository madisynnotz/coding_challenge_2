// Task 1: Working with Arrays //
let products = ["Face Wash", "Toner", "Moisturizer", "Syrum", "Makeup Remover"];    

products.push("Vitiam C syrum");    

console.log(products);   

products.pop();    

console.log("Updated list of products:",products);    

// Task 2: Accessing and Modifying Arrays //
let scores = [80, 83, 85, 90, 95];    
scores[1] = 95;   
let total = scores.reduce((a, b) => a + b, 0);   
let averageScore = total / scores.length;    

console.log("Updated list of Scores:", scores);    
console.log("Average of Scores:",average);   

// Task 3: Working with Objects //
let employee = {
    name: "Elena Brooks",
    age: 27,
    department: "Analytics",
    isActive: true
};    

console.log(employee);    

employee.department = "Logistics";    
employee.position = "Manager";    

console.log("updated employee record");    

// Task 4: Array of Objects //
let customers = [
    {name: "Tyrone Biggums", email: "Biggums@gmail.com", purchaseAmount: 100},
    {name: "Carl Johnson", email: "Johnson@gmail.com", purchaseAmount: 200},
    {name: "Trevor Philps", email: "Philps@gmail.com", purchaseAmount: 300}
];    // Array of objects of customers

console.log(customers);    // Print the array of objects of customers

customers.push({name: "Franklin Clinton", email: "Clinton@gmail.com", purchaseAmount: 400});    // Add a new customer to the array

console.log(customers);    // Print the array of objects of customers

// Task 5: Object Methods //
let order = {
    orderId: "101",
    customerName: "Tyrone Biggums",
    amount: 50,
    calculateTax: function() {
        const taxRate = 0.10;    // Tax rate
        return this.amount * taxRate;    // Calculate the tax amount
    }
};    // Object of order

console.log(order);    // Print the object of order
console.log(order.calculateTax());    // Print the tax amount
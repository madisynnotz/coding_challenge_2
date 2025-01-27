// Task 1: Working with Arrays //
let products = ["Face Wash", "Toner", "Moisturizer", "Syrum", "Makeup Remover"];    

products.push("Vitiam C syrum");    

console.log(products);   

products.pop();    
console.log("Updated list of products:",products);    

 // Task 2: Accessing and Modifying Arrays //
let scores = [80, 83, 85, 90, 95];    
scores[1] = 83;  
let total = scores.reduce((a, b) => a + b, 0);  
let averageScore = total / scores.length;    


console.log("Updated list of Scores:", scores);    
console.log("Average of Scores:",83); 

// Task 3: Working with Objects //
let employee = {
    name: "Elena Brooks",
    age: 27,
    department: "HR",
    isActive: true
};    


console.log(employee);    


employee.department = "Logistics";    
employee.position = "Manager";    


console.log("updated employee record");

// Task 4: Array of Objects //
let customers = [
    {name: "Joe Smith", email: "smith.joe@gmail.com", purchaseAmount: 200},
    {name: "Emily Kingston", email: "kingston.emily@gmail.com", purchaseAmount: 400},
    {name: "Kendall Vertes", email: "vertes.kendall@gmail.com", purchaseAmount: 100}
];  


console.log(customers);    


customers.push({name: "Sarah Vincent", email: "vincent.sarah@gmail.com", purchaseAmount: 300});    


console.log(customers);

// Task 5: Object Methods //
let order = {
    orderId: "100",
    customerName: "Kendall Vertes",
    amount: 75,
    calculateTax: function() {
        const taxRate = 0.07;  
        return this.amount * taxRate;    
    }
};    


console.log(order);  
console.log(order.calculateTax()); 
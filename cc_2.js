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
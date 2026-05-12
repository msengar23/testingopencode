# var :
 var is the original variable keyword. It is function-scoped, meaning if it is declared inside a block (like an if statement), it is still accessible outside that block.

if (true) {
    var name = "Mamta";
}
console.log(name); 

var name = "Neha"; 


 # let:
 
let is block-scoped. It is only accessible within the specific { } block where it is defined. You can update its value but cannot redeclare it in the same scope.

if (true) {
    let age = 18;
    console.log(age); 
}
// console.log(age); 

let percentage = 10;
percentage = 20; 
// let percentage = 30; 

# Const:

const is also block-scoped but is used for values that should never be reassigned. You must initialize it at the time of declaration.

const PI = 3.14;
// PI = 3.1415; 

const user = { name: "Mamta" };
user.name = "Neha"; // Allowed: mutating property
// user = { name: "Deepti" }; // TypeError: reassignment not allowed


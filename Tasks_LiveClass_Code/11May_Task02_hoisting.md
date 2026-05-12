# Hoisting:

hoisting is a behavior where the interpreter appears to move declarations (of variables, functions, and classes) to the top of their containing scope before the code actually runs.

greet(); // Works! Output: "Hello!"
function greet() { console.log("Hello!"); }   //function declaration 

console.log(user);                   // Outputs: undefined var declaraton
var user = "Mamta";

// let and const declarartion
console.log(age);    // ReferenceError: Cannot access 'age' before initialization 
let age = 25;
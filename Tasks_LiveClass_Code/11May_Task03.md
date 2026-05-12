No, we cannot reassign a const variable, but yes, you can often modify its contents if it is an object or an array.

# Primitive Value:
const PI = 3.14;
PI = 3.14159; // TypeError: Assignment to constant variable.

# Objects and Arrays:

const user = { name: "Alice", age: 25 };

// This is ALLOWED: Modifying a property
user.age = 26; 

// This is NOT ALLOWED: Reassigning the entire variable
user = { name: "Bob" }; // TypeError: Assignment to constant variable.

# With Array:
const colors = ["red", "green"];

// This is ALLOWED: Adding an item
colors.push("blue"); 

// This is NOT ALLOWED: Reassigning to a new array
colors = ["yellow", "purple"]; // TypeError: Assignment to constant variable.
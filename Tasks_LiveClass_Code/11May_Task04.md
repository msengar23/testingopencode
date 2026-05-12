# Function Scope:
 Variables are only accessible within the function they are declared in.

 # Block Scope: 
 Variables are confined to the specific block of code (defined by curly braces {}) in which they are declared, such as within if statements or for loops.

 # Relationship to var, let, and const:

 # var (Function Scoped): 
 If you declare a var inside an if block, it "leaks" out and is still accessible anywhere else in the surrounding function. This can lead to unexpected bugs.
 
 # let and const (Block Scoped): 
 Introduced in ES6, these are safer because they stay inside the specific block (like a loop or conditional) where they were born. You cannot access them outside those curly braces.
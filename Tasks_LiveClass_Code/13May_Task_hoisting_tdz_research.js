// =============================================================================
// Research: Hoisting and Temporal Dead Zone (TDZ) in JavaScript
// File: 24_hoisting_tdz_research.js
// =============================================================================

/*
================================================================================
TABLE OF CONTENTS
================================================================================
1. What is Hoisting?
2. How JavaScript Engine Works (Creation vs Execution Phase)
3. var Hoisting
4. let Hoisting & TDZ
5. const Hoisting & TDZ
6. Function Hoisting
7. Class Hoisting
8. TDZ in Different Scenarios
9. Visual Memory Model
10. Common Interview Questions
================================================================================
*/

// =============================================================================
// 1. WHAT IS HOISTING?
// =============================================================================
// Hoisting is JavaScript's default behavior of moving DECLARATIONS to the top
// of their containing scope (script or function) during the compile phase.
//
// IMPORTANT: Only DECLARATIONS are hoisted, NOT initializations/assignments.
//
// Think of it like this:
//   Before JS runs your code, it scans for all declarations and "notes" them.
//   This happens in the "Creation Phase" (also called Compile Phase).

console.log("=== 1. WHAT IS HOISTING? ===");

// Example:
console.log(myVar);  // undefined (not ReferenceError!)
var myVar = 100;
console.log(myVar);  // 100

// What JS actually does behind the scenes:
//   var myVar;          <-- hoisted declaration (initialized as undefined)
//   console.log(myVar);  // undefined
//   myVar = 100;         <-- assignment stays in place
//   console.log(myVar);  // 100


// =============================================================================
// 2. HOW JAVASCRIPT ENGINE WORKS
// =============================================================================
// JavaScript execution happens in TWO phases for EVERY scope:
//
// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  PHASE 1: CREATION (Compile) Phase                                          │
// │  ─────────────────────────────                                              │
// │  • Memory is allocated for variables and functions                          │
// │  • var declarations are hoisted and initialized with undefined              │
// │  • let and const declarations are hoisted but NOT initialized (in TDZ)      │
// │  • Function declarations are hoisted with their FULL definition             │
// │  • this binding is set up                                                   │
// │  • Scope chain is created                                                   │
// └─────────────────────────────────────────────────────────────────────────────┘
//                                    ↓
// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  PHASE 2: EXECUTION Phase                                                   │
// │  ─────────────────────────────                                              │
// │  • Code runs line by line                                                   │
// │  • Variables are assigned values                                            │
// │  • Functions are called                                                     │
// └─────────────────────────────────────────────────────────────────────────────┘

console.log("\n=== 2. HOW JAVASCRIPT ENGINE WORKS ===");

function demonstratePhases() {
    // During Creation Phase, JS "sees" these declarations:
    // var localVar;        → set to undefined
    // let localLet;        → stays uninitialized (TDZ)
    // function localFn(){} → fully available

    console.log("localVar:", localVar);   // undefined
    // console.log(localLet);             // ❌ ReferenceError: Cannot access before initialization

    var localVar = "I am var";
    let localLet = "I am let";

    function localFn() {
        return "I am hoisted!";
    }

    console.log("localFn():", localFn());
    console.log("localLet:", localLet);
}

demonstratePhases();


// =============================================================================
// 3. var HOISTING
// =============================================================================
// • var is hoisted to the top of its FUNCTION scope (not block scope)
// • It is initialized with undefined during hoisting
// • You can access it BEFORE its declaration → you get undefined

console.log("\n=== 3. var HOISTING ===");

// Example 3a: Basic var hoisting
console.log("hoistedVar before:", hoistedVar);  // undefined
var hoistedVar = 42;
console.log("hoistedVar after:", hoistedVar);   // 42

// Example 3b: var inside a function
function varExample() {
    console.log("inside fn, before:", x);  // undefined
    var x = 10;
    console.log("inside fn, after:", x);   // 10
}
varExample();

// Example 3c: var has FUNCTION scope, not block scope
if (true) {
    var blockVar = "I leak out!";
}
console.log("blockVar outside if:", blockVar);  // "I leak out!" (not undefined!)

// Example 3d: Multiple var declarations
var duplicate = 1;
var duplicate = 2;  // No error! var allows re-declaration
console.log("duplicate:", duplicate);  // 2

// Example 3e: var hoisting inside loops
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i:", i), 10);  // 3, 3, 3 (classic closure bug!)
}
// Why? Because 'var i' is hoisted to function/script scope,
// so all closures share the SAME variable.


// =============================================================================
// 4. let HOISTING & TDZ
// =============================================================================
// • let IS hoisted (yes! it's a common misconception that it's not)
// • BUT it is NOT initialized with undefined
// • It enters the "Temporal Dead Zone" (TDZ) from the start of the block
//   until the line where it is declared
// • Accessing it in TDZ throws ReferenceError

console.log("\n=== 4. let HOISTING & TDZ ===");

// Example 4a: TDZ - Temporal Dead Zone
// console.log(tdVar);  // ❌ ReferenceError: Cannot access 'tdVar' before initialization
let tdVar = "I am let";
console.log("tdVar after declaration:", tdVar);

// Example 4b: TDZ visualized
{
    // TDZ for 'name' starts here
    // console.log(name);   // ❌ ReferenceError - still in TDZ
    let name = "Alice";      // TDZ ends here
    console.log("name:", name);  // "Alice"
}

// Example 4c: TDZ with typeof
// console.log(typeof mysteryLet);  // ❌ ReferenceError (not "undefined"!)
let mysteryLet = 99;

// Compare with var:
console.log("typeof mysteryVar:", typeof mysteryVar);  // "undefined" (no error!)
var mysteryVar = 88;

// Example 4d: TDZ with functions
{
    // console.log(greetLet());  // ❌ ReferenceError - greetLet is in TDZ
    let greetLet = function() {
        return "Hello!";
    };
    console.log(greetLet());
}

// Example 4e: let is BLOCK scoped
if (true) {
    let blockLet = "I stay inside!";
}
// console.log(blockLet);  // ❌ ReferenceError: blockLet is not defined

// Example 4f: let doesn't allow re-declaration in same scope
let unique = 1;
// let unique = 2;  // ❌ SyntaxError: Identifier 'unique' has already been declared

// Example 4g: let hoisting inside loops (the fix!)
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 20);  // 0, 1, 2 (each iteration gets fresh binding)
}


// =============================================================================
// 5. const HOISTING & TDZ
// =============================================================================
// • const behaves EXACTLY like let regarding hoisting and TDZ
// • const IS hoisted but NOT initialized
// • const MUST be initialized at the time of declaration
// • const cannot be reassigned (but object properties CAN be modified!)

console.log("\n=== 5. const HOISTING & TDZ ===");

// Example 5a: const TDZ
// console.log(constVar);  // ❌ ReferenceError: Cannot access 'constVar' before initialization
const constVar = "I am const";
console.log("constVar:", constVar);

// Example 5b: const must be initialized
// const uninit;  // ❌ SyntaxError: Missing initializer in const declaration

// Example 5c: const cannot be reassigned
const PI = 3.14159;
// PI = 3.14;  // ❌ TypeError: Assignment to constant variable

// Example 5d: const with objects (reference vs value)
const person = { name: "Bob", age: 30 };
// person = {};     // ❌ TypeError: can't reassign the reference
person.age = 31;     // ✅ Allowed! Object is mutable, only binding is const
person.city = "NYC"; // ✅ Allowed!
console.log("person:", person);

// Example 5e: const with arrays
const colors = ["red", "blue"];
// colors = [];       // ❌ TypeError
colors.push("green");  // ✅ Allowed!
colors[0] = "yellow";  // ✅ Allowed!
console.log("colors:", colors);

// Example 5f: const hoisting in blocks
{
    // console.log(blockConst);  // ❌ ReferenceError - in TDZ
    const blockConst = "block only";
    console.log(blockConst);
}


// =============================================================================
// 6. FUNCTION HOISTING
// =============================================================================
// • Function DECLARATIONS are fully hoisted (name + body)
// • Function EXPRESSIONS are NOT hoisted (only variable declaration is)

console.log("\n=== 6. FUNCTION HOISTING ===");

// Example 6a: Function DECLARATION - fully hoisted
console.log("declaredFn():", declaredFn());  // "Works!" - called BEFORE declaration!

function declaredFn() {
    return "Works!";
}

// Example 6b: Function EXPRESSION with var - NOT fully hoisted
// console.log(varExpression());  // ❌ TypeError: varExpression is not a function
var varExpression = function() {
    return "I am a function expression";
};
console.log("varExpression():", varExpression());

// What happens behind the scenes:
// var varExpression;            ← hoisted as undefined
// console.log(varExpression());  // undefined() → TypeError!
// varExpression = function(){...};  ← assignment happens here

// Example 6c: Function EXPRESSION with let - in TDZ
// console.log(letExpression());  // ❌ ReferenceError: Cannot access before initialization
let letExpression = function() {
    return "let function expression";
};
console.log("letExpression():", letExpression());

// Example 6d: Arrow function with const - in TDZ
// console.log(arrowFn());  // ❌ ReferenceError
const arrowFn = () => "Arrow function!";
console.log("arrowFn():", arrowFn());

// Example 6e: Function declarations vs var variables
var myName = "Global";
function myName() { return "I am a function"; }
console.log("typeof myName:", typeof myName);  // "string" (var wins over function declaration!)

// Example 6f: Function declarations inside blocks (var vs let)
function outer() {
    console.log("innerFn type:", typeof innerFn);  // "function" - fully hoisted
    function innerFn() {
        return "inner";
    }
}
outer();


// =============================================================================
// 7. CLASS HOISTING
// =============================================================================
// • Classes are hoisted BUT NOT initialized (similar to let/const TDZ)
// • You cannot use a class before its declaration

console.log("\n=== 7. CLASS HOISTING ===");

// Example 7a: Class declaration TDZ
// const dog = new Animal();  // ❌ ReferenceError: Cannot access 'Animal' before initialization
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a sound`;
    }
}
const dog = new Animal("Buddy");
console.log("dog.speak():", dog.speak());

// Example 7b: Class expression (not hoisted)
// const cat = new Cat();  // ❌ ReferenceError
const Cat = class {
    meow() { return "Meow!"; }
};
const cat = new Cat();
console.log("cat.meow():", cat.meow());


// =============================================================================
// 8. TDZ IN DIFFERENT SCENARIOS
// =============================================================================

console.log("\n=== 8. TDZ IN DIFFERENT SCENARIOS ===");

// Scenario 1: TDZ inside a function parameter default value
function tdzDefault(x = y, y) {
    return [x, y];
}
// console.log(tdzDefault(undefined, 1));  // ❌ ReferenceError: y is in TDZ when evaluating x's default

// Fixed version:
function fixedDefault(y, x = y) {
    return [x, y];
}
console.log("fixedDefault(5):", fixedDefault(5));  // [5, 5]

// Scenario 2: TDZ with destructuring
{
    // const { a = b, b } = { b: 2 };  // ❌ ReferenceError: b is in TDZ
    const { b, a = b } = { b: 2 };    // ✅ Works!
    console.log("destructured:", a, b);
}

// Scenario 3: TDZ across nested scopes
function outerTDZ() {
    // console.log(innerLet);  // ❌ ReferenceError - innerLet is NOT visible here
    {
        let innerLet = "inside";
        console.log("innerLet:", innerLet);
    }
}
outerTDZ();

// Scenario 4: typeof in TDZ trap
{
    // console.log(typeof notDeclaredLet);  // ❌ ReferenceError
    let notDeclaredLet = 1;
}
// Compare with var (which is initialized with undefined):
console.log("typeof undeclaredVar:", typeof undeclaredVar);  // "undefined" - no error
var undeclaredVar = 2;

// Scenario 5: Temporal Dead Zone in switch statements
const action = "jump";
switch (action) {
    case "jump":
        // console.log(speed);  // ❌ ReferenceError - speed is in TDZ for entire switch block
        let speed = 50;
        console.log("speed:", speed);
        break;
    case "run":
        // let speed = 100;  // ❌ SyntaxError: redeclaration (same block!)
        break;
}


// =============================================================================
// 9. VISUAL MEMORY MODEL
// =============================================================================

/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVASCRIPT MEMORY MODEL DURING HOISTING                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  BEFORE EXECUTION (Creation Phase):                                         │
│  ╔═══════════════════════════════════════════════════════════════════════╗  │
│  ║  Global Scope                                                        ║  │
│  ║  ─────────────                                                       ║  │
│  ║  var a              → undefined   ✅ accessible                       ║  │
│  ║  var b              → undefined   ✅ accessible                       ║  │
│  ║  let c              → <uninitialized>  ❌ in TDZ                      ║  │
│  ║  const d            → <uninitialized>  ❌ in TDZ                      ║  │
│  ║  function foo(){}   → function object  ✅ fully usable               ║  │
│  ║  let bar = fn       → <uninitialized>  ❌ in TDZ (expression!)        ║  │
│  ╚═══════════════════════════════════════════════════════════════════════╝  │
│                                                                             │
│  DURING EXECUTION (after declarations):                                     │
│  ╔═══════════════════════════════════════════════════════════════════════╗  │
│  ║  var a = 10         → 10              ✅                              ║  │
│  ║  var b              → undefined       ✅                              ║  │
│  ║  let c = 20         → 20              ✅ (TDZ ended)                  ║  │
│  ║  const d = 30       → 30              ✅ (TDZ ended)                  ║  │
│  ║  function foo(){}   → function object ✅                              ║  │
│  ║  let bar = fn       → function object ✅ (TDZ ended)                  ║  │
│  ╚═══════════════════════════════════════════════════════════════════════╝  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
*/

console.log("\n=== 9. VISUAL MEMORY MODEL ===");
console.log("See the commented ASCII diagram in the source code above.");

function memoryModelDemo() {
    // Creation Phase sets up:
    // var a → undefined
    // let b → <uninitialized> (TDZ)
    // function sayHi → fully available

    console.log("var a before:", a);     // undefined
    // console.log("let b before:", b);  // ❌ ReferenceError
    console.log("sayHi():", sayHi());    // "Hi!"

    var a = 10;
    let b = 20;
    function sayHi() { return "Hi!"; }

    console.log("var a after:", a);      // 10
    console.log("let b after:", b);      // 20
}
memoryModelDemo();


// =============================================================================
// 10. COMMON INTERVIEW QUESTIONS
// =============================================================================

console.log("\n=== 10. COMMON INTERVIEW QUESTIONS ===");

// Q1: What is the output?
console.log("\n--- Q1 ---");
console.log(q1);           // undefined
var q1 = 5;

// Q2: What is the output?
console.log("\n--- Q2 ---");
// console.log(q2);        // ❌ ReferenceError (TDZ)
let q2 = 10;

// Q3: What is the output?
console.log("\n--- Q3 ---");
function q3() {
    console.log(q3var);    // undefined
    var q3var = 25;
}
q3();

// Q4: What is the output?
console.log("\n--- Q4 ---");
function q4() {
    // console.log(q4let); // ❌ ReferenceError (TDZ)
    let q4let = 35;
}
q4();

// Q5: Variable vs Function declaration precedence
console.log("\n--- Q5 ---");
var q5 = "variable";
function q5() { return "function"; }
console.log(typeof q5);    // "string" (variable assignment wins!)

// Q6: What is the output?
console.log("\n--- Q6 ---");
var x = 1;
function q6() {
    console.log(x);        // undefined (local var x is hoisted, shadows global x)
    var x = 2;
}
q6();

// Q7: let in same scope
console.log("\n--- Q7 ---");
let q7 = "outer";
{
    // console.log(q7);     // ❌ ReferenceError (TDZ - inner q7 shadows outer)
    let q7 = "inner";
    console.log(q7);       // "inner"
}
console.log(q7);           // "outer"

// Q8: const object mutation
console.log("\n--- Q8 ---");
const q8 = { a: 1 };
q8.a = 2;                  // ✅ Allowed
q8.b = 3;                  // ✅ Allowed
console.log(q8);           // { a: 2, b: 3 }
// q8 = {};                // ❌ TypeError

// Q9: var in loop with setTimeout (closure trap)
console.log("\n--- Q9 ---");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("Q9 var i:", i), 30);  // 3, 3, 3
}

// Q10: let in loop with setTimeout (fixed closure)
console.log("\n--- Q10 ---");
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("Q10 let j:", j), 40);  // 0, 1, 2
}


// =============================================================================
// SUMMARY TABLE
// =============================================================================
/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                         HOISTING & TDZ SUMMARY                              │
├──────────────┬─────────────────┬──────────────────┬─────────────────────────┤
│ Declaration  │ Hoisted?        │ Initialized?     │ Access Before Declare   │
├──────────────┼─────────────────┼──────────────────┼─────────────────────────┤
│ var          │ ✅ Yes           │ ✅ undefined      │ ✅ Returns undefined     │
│ let          │ ✅ Yes (TDZ)     │ ❌ No             │ ❌ ReferenceError        │
│ const        │ ✅ Yes (TDZ)     │ ❌ No             │ ❌ ReferenceError        │
│ function(){} │ ✅ Yes           │ ✅ Full function  │ ✅ Works perfectly       │
│ var fn = ... │ ✅ Yes (var)     │ ✅ undefined      │ ❌ TypeError             │
│ let fn = ... │ ✅ Yes (TDZ)     │ ❌ No             │ ❌ ReferenceError        │
│ class        │ ✅ Yes (TDZ)     │ ❌ No             │ ❌ ReferenceError        │
└──────────────┴─────────────────┴──────────────────┴─────────────────────────┘

KEY TAKEAWAYS:
────────────────
1. ALL declarations (var, let, const, function, class) are hoisted in JS.
2. Only var and function declarations are INITIALIZED during hoisting.
3. let and const enter the Temporal Dead Zone (TDZ) until their declaration line.
4. Accessing let/const in TDZ throws ReferenceError (not undefined).
5. typeof for an undeclared variable returns "undefined" but for let in TDZ it errors.
6. Function declarations fully hoisted → call them anywhere in scope.
7. Function expressions (var/let/const) behave like their variable type.
8. var has function scope; let and const have block scope.
9. const requires initialization and prevents reassignment (not mutation).
10. Use let/const by default; avoid var in modern JavaScript.
*/

console.log("\n=== END OF RESEARCH ===");
console.log("Review the source code comments for the full research content.");

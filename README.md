# LearnPlaywrightBasics2X

A comprehensive learning repository for **JavaScript fundamentals** and **Playwright automation testing** concepts. This project is organized into chapters covering everything from basic JavaScript syntax to advanced automation testing patterns.

---

## 📚 Table of Contents

- [About This Repository](#about-this-repository)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [How to Use](#how-to-use)
- [Chapters Overview](#chapters-overview)
  - [Chapter 01: Basics](#chapter-01-basics)
  - [Chapter 02: JavaScript Concepts](#chapter-02-javascript-concepts)
  - [Chapter 03: Identifiers & Literals](#chapter-03-identifiers--literals)
  - [Chapter 04: JavaScript Concepts - Variables, Functions & Scope](#chapter-04-javascript-concepts---variables-functions--scope)
  - [Chapter 05: Literals](#chapter-05-literals)
- [VS Code Tips](#vs-code-tips)
- [Running the Code](#running-the-code)
- [Contributing](#contributing)

---

## About This Repository

This repository serves as a structured learning resource for:
- JavaScript programming fundamentals
- Naming conventions and best practices
- VS Code editor shortcuts and productivity tips
- Identifier rules, keywords, and literals in JavaScript
- Foundation concepts for Playwright test automation

Each chapter contains practical examples with VS Code-specific tips, keyboard shortcuts, and hands-on exercises.

---

## Repository Structure

```
LearnPlaywrightBasics2X/
├── Chapter_01_Basics/                          # JavaScript Basics
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JSCommands.js
│   └── 04_HotCode.js
│
├── Chapter_02_Javascript_Concept/              # JavaScript Core Concepts
│   └── 05_JS_Basics.js
│
├── Chapter_03_Identifier_Literals/             # Identifiers, Keywords & Literals
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Literals_Part02.js
│   ├── 08_Comments.js
│   ├── Identifier_Rules.md
│   ├── JavaScript_Keywords.md
│   ├── JavaScript_Keywords_VS_Code.md
│   ├── JavaScript_Literals_VS_Code.md
│   └── VS_Code_KeyboardShortcuts.md
│
├── Chapter_04_JavaScript_Concepts/             # Variables, Functions & Scope
│   ├── 09_Var_Let_Const.js
│   ├── 10_functions.js
│   ├── 11_var_explained.js
│   ├── 12_let_people_love.js
│   ├── 13_const_explained.js
│   ├── 14_var_functionscope.js
│   ├── 15_let_scope.js
│   ├── 16_Hoisting.js
│   ├── 17_hoisting_fn.js
│   ├── 18_let_hoisting.js
│   ├── 19_let_hoisting_block.js
│   ├── 20_let_const.js
│   └── 21_Jr_QA.js
│
├── Chapter_05_Literal/                         # Literals in JavaScript
│   ├── 22_literal.js
│   ├── 23_null_undefined.js
│   ├── 24_hoisting_tdz_research.js
│   └── 26_Literal_Number_all.js
│
├── Tasks_LiveClass_Code/                       # Live Class Tasks & Assignments
│   ├── 11May_Task01_diff_let_var_const.md
│   ├── 11May_Task02_hoisting.md
│   ├── 11May_Task03.md
│   ├── 11May_Task04.md
│   └── 11May_Task05.js
│
├── .vscode/
│   └── extensions.json                         # Recommended VS Code extensions
│
├── hello.js                                    # Quick start example
└── README.md                                   # This file
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [VS Code](https://code.visualstudio.com/) (recommended editor)
- Basic understanding of programming concepts

---

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/msengar23/LearnPlaywrightBasics2X.git
   cd LearnPlaywrightBasics2X
   ```

2. **Open in VS Code:**
   ```bash
   code .
   ```

3. **Run JavaScript files:**
   ```bash
   node filename.js
   ```

4. **Use VS Code Debugger:**
   - Press `F5` to start debugging
   - Press `F9` to toggle breakpoints
   - Press `F10` to step over, `F11` to step into

---

## Chapters Overview

### Chapter 01: Basics

**Files:** `Chapter_01_Basics/`

Covers foundational JavaScript concepts:
- Variable declarations (`var`, `let`, `const`)
- Data types and type conversions
- Basic operators
- Console commands and debugging
- Essential JavaScript commands for daily use

**Key topics:**
- `01_Basics.js` - Core syntax fundamentals
- `02_JS.js` - JavaScript execution basics
- `03_JSCommands.js` - Useful JavaScript commands
- `04_HotCode.js` - Commonly used code patterns

---

### Chapter 02: JavaScript Concepts

**File:** `Chapter_02_Javascript_Concept/05_JS_Basics.js`

Deep dive into JavaScript programming concepts:
- Variable scoping (global vs function vs block)
- Hoisting behavior
- Type coercion and truthy/falsy values
- Comparison operators (`==` vs `===`)
- Template literals and string interpolation
- Arrow functions and function expressions
- Array and object destructuring
- Spread and rest operators

---

### Chapter 03: Identifiers & Literals

**Files:** `Chapter_03_Identifier_Literals/`

Comprehensive coverage of JavaScript identifiers, naming conventions, keywords, and literals with VS Code integration.

#### 3.1 Identifier Rules
- **Files:** `06_Identifier_Rules.js`, `Identifier_Rules.md`
- Valid identifier patterns
- Naming conventions (camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE)
- Reserved keywords restrictions
- Case-sensitivity rules
- Unicode support

#### 3.2 Naming Conventions
- **File:** `07_Identifier_Literals_Part02.js`
- camelCase for variables and functions
- PascalCase for classes and constructors
- snake_case for database fields and JSON keys
- SCREAMING_SNAKE_CASE for constants
- Hungarian notation (legacy style)

#### 3.3 Comments
- **File:** `08_Comments.js`
- Single-line comments (`//`)
- Multi-line comments (`/* */`)
- JSDoc documentation comments
- VS Code comment/uncomment shortcuts

#### 3.4 JavaScript Keywords
- **File:** `JavaScript_Keywords.md`
- Declaration keywords: `var`, `let`, `const`, `function`, `class`
- Control flow: `if`, `else`, `switch`, `case`, `try`, `catch`
- Loop keywords: `for`, `while`, `do`, `break`, `continue`
- Object/Class context: `this`, `super`, `new`, `extends`
- Type checking: `typeof`, `instanceof`, `delete`, `in`
- Literals: `true`, `false`, `null`, `undefined`
- Async: `async`, `await`
- Modules: `import`, `export`, `default`

#### 3.5 Keywords with VS Code
- **File:** `JavaScript_Keywords_VS_Code.md`
- All keywords with VS Code-specific tips
- Syntax highlighting explanations
- IntelliSense usage for each keyword
- Debugging tips with breakpoints
- Keyboard shortcuts for keyword navigation

#### 3.6 JavaScript Literals
- **File:** `JavaScript_Literals_VS_Code.md`
- String literals (single, double, template)
- Number literals (integer, float, binary, octal, hex, BigInt)
- Boolean literals (`true`, `false`)
- Null and undefined literals
- Array and object literals
- Regular expression literals
- Function expression literals
- Symbol literals
- Spread/rest literals
- Destructuring patterns

#### 3.7 VS Code Keyboard Shortcuts
- **File:** `VS_Code_KeyboardShortcuts.md`
- Complete Windows keyboard shortcuts reference
- General, editing, navigation, search shortcuts
- Multi-cursor, debugging, terminal shortcuts
- File and editor management shortcuts

---

### Chapter 04: JavaScript Concepts - Variables, Functions & Scope

**Files:** `Chapter_04_JavaScript_Concepts/`

Deep dive into JavaScript variables, functions, and scoping mechanisms:
- Variable declarations deep dive (`var`, `let`, `const`)
- Function declarations, expressions, and arrow functions
- Global scope, function scope, and block scope
- Hoisting behavior for variables and functions
- Temporal Dead Zone (TDZ) for `let` and `const`
- Practical examples and comparisons

**Key topics:**
- `09_Var_Let_Const.js` - Overview of variable declarations
- `10_functions.js` - Functions in JavaScript
- `11_var_explained.js` - Deep dive into `var`
- `12_let_people_love.js` - Understanding `let`
- `13_const_explained.js` - Understanding `const`
- `14_var_functionscope.js` - Function scope with `var`
- `15_let_scope.js` - Block scope with `let`
- `16_Hoisting.js` - Variable and function hoisting
- `17_hoisting_fn.js` - Function hoisting behavior
- `18_let_hoisting.js` - `let` hoisting and TDZ
- `19_let_hoisting_block.js` - Block scope hoisting with `let`
- `20_let_const.js` - `let` vs `const` behavior
- `21_Jr_QA.js` - Junior QA interview-style questions

---

### Chapter 05: Literals

**Files:** `Chapter_05_Literal/`

Covers all types of literals in JavaScript with practical examples:
- Number literals (integer, float, binary, octal, hex, BigInt)
- Special numeric values (`Infinity`, `-Infinity`, `NaN`)
- `null` vs `undefined` — differences, use-cases, and `typeof` behavior
- Scientific notation and numeric separators
- Number parsing and base conversions

**Key topics:**
- `22_literal.js` - Introduction to literals
- `23_null_undefined.js` - `null` vs `undefined` explained with examples
- `24_hoisting_tdz_research.js` - Comprehensive research on Hoisting & Temporal Dead Zone (TDZ) for `var`, `let`, `const`, functions, and classes
- `26_Literal_Number_all.js` - Complete guide to all number types in JavaScript

---

## VS Code Tips

### Recommended Extensions
Install these extensions for the best experience:
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **JavaScript (ES6) code snippets** - Quick code generation
- **Path Intellisense** - Auto-complete file paths
- **GitLens** - Enhanced Git capabilities

### Essential Shortcuts for This Repo

| Shortcut | Action |
|:---|:---|
| `Ctrl + /` | Toggle line comment |
| `Shift + Alt + A` | Toggle block comment |
| `Ctrl + `` ` | Open integrated terminal |
| `F5` | Start debugging |
| `F9` | Toggle breakpoint |
| `Ctrl + Space` | Trigger IntelliSense |
| `Shift + Alt + F` | Format document |
| `F2` | Rename symbol |
| `F12` | Go to definition |
| `Ctrl + D` | Select next occurrence |
| `Ctrl + Shift + L` | Select all occurrences |
| `Alt + Up/Down` | Move line up/down |

---

## Running the Code

### Run a Single File
```bash
node Chapter_01_Basics/01_Basics.js
```

### Run with Debugging
1. Open the file in VS Code
2. Press `F9` on the line where you want to break
3. Press `F5` to start debugging
4. Use `F10` (step over) or `F11` (step into)

### Run All Chapter 03 Files
```bash
node Chapter_03_Identifier_Literals/06_Identifier_Rules.js
node Chapter_03_Identifier_Literals/07_Identifier_Literals_Part02.js
node Chapter_03_Identifier_Literals/08_Comments.js
```

### Run Chapter 04 Files
```bash
node Chapter_04_JavaScript_Concepts/09_Var_Let_Const.js
node Chapter_04_JavaScript_Concepts/10_functions.js
node Chapter_04_JavaScript_Concepts/11_var_explained.js
node Chapter_04_JavaScript_Concepts/12_let_people_love.js
node Chapter_04_JavaScript_Concepts/13_const_explained.js
node Chapter_04_JavaScript_Concepts/14_var_functionscope.js
node Chapter_04_JavaScript_Concepts/15_let_scope.js
node Chapter_04_JavaScript_Concepts/16_Hoisting.js
node Chapter_04_JavaScript_Concepts/17_hoisting_fn.js
node Chapter_04_JavaScript_Concepts/18_let_hoisting.js
node Chapter_04_JavaScript_Concepts/19_let_hoisting_block.js
node Chapter_04_JavaScript_Concepts/20_let_const.js
node Chapter_04_JavaScript_Concepts/21_Jr_QA.js
```

### Run Chapter 05 Files
```bash
node Chapter_05_Literal/22_literal.js
node Chapter_05_Literal/23_null_undefined.js
node Chapter_05_Literal/24_hoisting_tdz_research.js
node Chapter_05_Literal/26_Literal_Number_all.js
```

---

## Topics Covered Summary

| Category | Topics |
|:---|:---|
| **Basics** | Variables, Data Types, Operators, Console |
| **Concepts** | Scope, Hoisting, Type Coercion, Comparisons |
| **Identifiers** | Rules, Conventions, Reserved Words |
| **Keywords** | 50+ JavaScript keywords with examples |
| **Literals** | String, Number, Boolean, Array, Object, Regex, null, undefined, BigInt |
| **Hoisting & TDZ** | var/let/const hoisting, Temporal Dead Zone, Function/Class hoisting |
| **Variables & Functions** | var/let/const, Function scope, Block scope, Hoisting, TDZ |
| **VS Code** | Shortcuts, Debugging, IntelliSense, Snippets |
| **Best Practices** | Naming conventions, Code formatting |

---

## Contributing

Feel free to contribute to this learning repository:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-topic`)
3. Commit your changes (`git commit -am 'Add new topic'`)
4. Push to the branch (`git push origin feature/new-topic`)
5. Open a Pull Request

---

## License

This project is for educational purposes.

---

## Author

Created for learning JavaScript and Playwright automation testing basics.

**Happy Learning!** 🎉

---

*Last updated: May 2026*

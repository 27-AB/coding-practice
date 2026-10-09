# Day 02 — JavaScript Functions, Arrow Functions, Login Validation & Git

**Date:** October 9, 2026
**Learning path:** JavaScript fundamentals → backend development
**Repository:** `coding-practice`
**Practice folder:** `JavaScripts/js_beginner`

## 1. Learning objectives

* Understand function declarations and function expressions.
* Understand parameters, arguments, and return values.
* Learn arrow function syntax and implicit vs. explicit returns.
* Understand function composition and how returned values move between functions.
* Practice hoisting and common JavaScript errors.
* Combine functions, conditions, and logical operators to build a login validator.
* Practice Git commands for staging, unstaging, tracking, committing, and pushing files.

## 2. JavaScript concepts practiced

### A. Function declarations and function calls

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Abel");
greet("Bilen");
greet("Birhane");
```

**What I learned:**

* A function declaration defines reusable code.
* A parameter receives a value when the function is called.
* An argument is the actual value passed to a function.
* Defining a function does not execute its body; calling it does.

### B. `console.log()` vs. `return`

```javascript
function addAndPrint(a, b) {
    console.log(a + b);
}

function addAndReturn(a, b) {
    return a + b;
}
```

**What I learned:**

* `console.log()` displays a value.
* `return` sends a value back to the code that called the function.
* A function without an executed return statement returns `undefined` by default.
* Returned values can be stored in variables and passed to other functions.

### C. Function composition

```javascript
function subtract(a, b) {
    return a - b;
}

function double(number) {
    return number * 2;
}

const result = subtract(10, 4);
const finalResult = double(result);

console.log(result);      // 6
console.log(finalResult); // 12
```

**What I learned:** One function's returned value can become another function's argument.

### D. Function expressions and arrow functions

```javascript
const greetAgain = function(name) {
    return "Hello " + name;
};

const add = (a, b) => a + b;
```

**What I learned:**

* A function expression can be assigned to a variable.
* An arrow function uses the `=>` syntax.
* Parentheses around parameters can be omitted when there is exactly one simple parameter.
* Arrow functions with multiple parameters require parentheses.

### E. Implicit and explicit returns

```javascript
const first = number => number * 2;

const second = number => {
    return number * 2;
};

const third = number => {
    number * 2;
};
```

**What I learned:**

* An arrow function with a concise body implicitly returns its expression.
* A block body surrounded by `{}` needs an explicit `return` to return a value.
* `first(5)` returns `10`.
* `second(5)` returns `10`.
* `third(5)` returns `undefined`.

### F. Hoisting and common errors

I practiced predicting the behavior of:

```javascript
console.log(a);
var a = 10;
```

```javascript
console.log(score);
let score = 50;
```

```javascript
greet();
var greet = function() {
    console.log("Hello!");
};
```

**What I learned:**

* A `var` declaration is hoisted and initially has the value `undefined`; its assignment is not hoisted.
* Accessing a `let` or `const` variable before initialization causes a `ReferenceError`.
* Calling a variable whose value is `undefined` causes a `TypeError`.
* A function declaration can be called before its declaration appears in the code.

## 3. Practical project — Login validator

I built a JavaScript login validator using an object, arrow functions, conditions, logical operators, and return values.

```javascript
const user = {
    username: "Bilen",
    password: "abc12345"
};

const validateLogin = (username, password) => {
    if (username === user.username && password === user.password) {
        return true;
    } else {
        return false;
    }
};

const showLoginMessage = (isValid) => {
    if (isValid === true) {
        return "Login successful";
    } else {
        return "Access denied";
    }
};

console.log(showLoginMessage(validateLogin("Bilen", "abc12345")));
console.log(showLoginMessage(validateLogin("Birhane", "abc12345")));
console.log(showLoginMessage(validateLogin("Bilen", "wrongpass")));
console.log(showLoginMessage(validateLogin("Birhane", "wrongpass")));
```

### Expected output

```text
Login successful
Access denied
Access denied
Access denied
```

**Important lessons from debugging:**

My first version incorrectly compared `username === username` and `password === password`. These comparisons compare each parameter with itself, so they do not validate the stored credentials.

I corrected them to:

```javascript
username === user.username
password === user.password
```

I also learned why `&&` matters: both credentials must match for the validator to return `true`.

The validation function can be simplified to:

```javascript
const validateLogin = (username, password) => {
    return username === user.username && password === user.password;
};
```

*Security note:* This is a learning exercise, not production authentication. Real applications must use secure password hashing, server-side validation, and appropriate authentication controls.

## 4. Git commands practiced and reviewed

### A. Check repository status

```powershell
git status
```

Shows modified, staged, untracked, and other relevant repository changes.

### B. Stage one file

```powershell
git add JavaScripts/js_beginner/login-validator.js
```

### C. Stage multiple files together

```powershell
git add file1.js file2.js
```

### D. Stage all changes

```powershell
git add .
```

Run this from the repository root and review the files carefully before committing.

### E. Unstage one or more files

```powershell
git restore --staged file1.js file2.js
```

### F. Unstage all staged files

```powershell
git restore --staged .
```

**Important:** Unstaging does not delete your work; it removes changes from the staging area while keeping your working files.

### G. Stop tracking files while keeping local copies

```powershell
git rm --cached file1.js file2.js
```

For a directory:

```powershell
git rm -r --cached foldername
```

This stages removal from the repository while keeping the local files. Add appropriate paths to `.gitignore` if you want Git to continue ignoring them.

### H. Commit changes

```powershell
git commit -m "Add JavaScript login validator"
```

Creates a commit from the staged changes.

### I. Push commits to GitHub

```powershell
git push origin main
```

Uploads local commits to the remote `main` branch.

### J. My standard Git workflow

```powershell
git status
git add .
git status
git commit -m "Describe my changes"
git push origin main
```

I should review the staged changes before committing, especially when using `git add .`.

## 5. Challenges completed

* Function calls with multiple arguments.
* Predicting the difference between `console.log()` and `return`.
* Passing values between functions.
* Identifying function expressions and arrow functions.
* Distinguishing implicit from explicit returns.
* Predicting hoisting behavior and JavaScript errors.
* Using functions with `if...else`.
* Validating input with `&&`.
* Debugging and testing four login scenarios.
* Reviewing Git staging, unstaging, untracking, committing, and pushing.

## 6. Key takeaways

1. A parameter receives an argument.
2. A function call evaluates to the value returned by that function.
3. An arrow function with a concise body implicitly returns its expression.
4. A block-bodied arrow function needs `return` to return a value explicitly.
5. `&&` returns a truthy or falsy operand based on short-circuit evaluation; in the login comparison, both comparisons must be true for the combined result to be `true`.
6. A variable should be compared with the expected value, not with itself.
7. Staging, tracking, committing, and pushing are different Git operations.

## 7. Next session

* Practice more function-return exercises.
* Refactor the login validator into shorter, clearer functions.
* Learn function scope and closures.
* Continue solving small JavaScript challenges.
* Keep building and documenting practical projects alongside learning.

**End-of-day reflection:** Today I moved from understanding individual JavaScript concepts to combining them in a working program. I also strengthened my Git workflow and learned how to debug incorrect comparisons systematically.

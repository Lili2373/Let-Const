const PI = 3.14;

let PI = 3.14;
PI = 42;

// What is the difference between var and let?

//With the var, you can both reassign and redeclare a variable, but with the let, you can only reassign and cannot redeclare. Variables declared with var can be accessed after hoisting, while those declared with let have block scope

// What is the difference between var and const?

// You have the flexibility to reassign and redeclare variables with var, but neither redeclaring nor reassigning is allowed when using the const. Variables declared with var can be accessed after hoisting, while const introduces block scope.

// What is the difference between let and const?

// With the let, you can reassign variables, but neither redeclaring nor reassigning is permitted when using the const.

// What is hoisting?

// This is how we describe the operation of the JavaScript compiler. Variables are elevated or 'hoisted' to the beginning of the scope in which they are defined. When you use 'var', you can access the variable's name along with its 'undefined' value before it gets used later in the code."
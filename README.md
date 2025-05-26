# JS-Practice-2

## Overview

This repository is a deep dive into advanced JavaScript concepts, focusing on object-oriented programming, asynchronous behavior, and advanced function handling. The practice material explores how JavaScript handles memory, inheritance, promises, and more.

## Topics Covered

### Objects and Classes

- **Objects**: Understanding object creation, manipulation, and reference behavior.
- **Classes**: ES6 class syntax, constructors, and class-based design patterns.
- **Object References and Copying**: Shallow vs deep copy, reference vs primitive value assignment.
- **Garbage Collection**: How JavaScript manages memory and garbage collects unreachable objects.
- **Object Methods and `this`**: Defining methods and understanding the dynamic context of `this`.
- **Constructor Functions and `new` Operator**: Creating reusable object blueprints using constructors.
- **Optional Chaining (`?.`)**: Safely accessing nested object properties.
- **Object to Primitive Conversion**: How objects are converted to primitive values when used in expressions.
- **Property Flags and Descriptors**: Controlling object properties with descriptors (`writable`, `enumerable`, `configurable`).
- **Getters and Setters**: Encapsulating access to object properties with functions.

### Prototypes and Inheritance

- **Prototypes**: The prototype chain and how JavaScript performs inheritance.
- **Native Prototypes**: Extending and understanding built-in object prototypes.
- **Objects Without `__proto__`**: Creating truly plain objects with `Object.create(null)`.
- **Class Inheritance**: Using `extends` to create subclasses from parent classes.
- **Extending Built-in Classes**: Creating custom classes that inherit from built-in ones like `Array` or `Error`.

### Asynchronous Programming

- **Promises and Chaining**: Creating and chaining promises for asynchronous flows.
- **Promise API**: Using `Promise.all`, `Promise.race`, `Promise.any`, and `Promise.allSettled`.
- **Error Handling with Promises**: Catching and managing errors in promise chains.
- **Custom Errors and Extending `Error`**: Defining meaningful error types.
- **Promisification**: Converting callback-based APIs to promise-based ones.
- **Async/Await**: Writing asynchronous code in a synchronous-like manner.
- **Async Iteration and Generators**: Iterating over asynchronous data with `for await...of`.

### Advanced Functions

- **Currying**: Transforming functions to receive arguments one at a time.
- **Hoisting**: Understanding how variable and function declarations are hoisted.
- **Callbacks**: Executing functions passed as arguments, commonly used in asynchronous code.
- **Microtasks**: Understanding the event loop and the role of microtasks in the execution queue.

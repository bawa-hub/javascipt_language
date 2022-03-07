// By default, the JavaScript provides the Object() function:
console.log(Object);
// [Function: Object]
// Please note that the Object() is a function

// It also provides an anonymous object that can be referenced via the prototype property of the Object function
console.log(Object.prototype);

// Object.prototype object has many methods and properties such as toString() and valueOf().
// Note when a function is a value of a property of an object, it’s called a method.
// So methods basically are properties of an object.

// Object.prototype also has an important property called constructor that references the Object() function
console.log(Object.prototype.constructor === Object); // true

// https://www.javascripttutorial.net/javascript-prototype/ for more

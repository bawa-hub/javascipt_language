// Object property initializer shorthand
// Prior to ES6
function createMachine(name, status) {
  return {
    name: name,
    status: status,
  };
}

// in ES6
function createMachine(name, status) {
  return {
    name,
    status,
  };
}

// Computed property name
let name = "machine name";
let machine = {
  [name]: "server",
  "machine hours": 10000,
};
console.log(machine[name]); // server
console.log(machine["machine hours"]); // 10000

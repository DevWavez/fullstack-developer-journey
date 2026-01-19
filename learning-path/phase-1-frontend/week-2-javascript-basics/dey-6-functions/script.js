// Task 1: create a simple function that prints "Hello, User!" to the console
function greet() {
  console.log('Hello, User!');
}

greet();

// Task 2: create a function with parameters that tahes a name and returns a greeting message
function greetUser(name) {
  return `Hello, ${name}!`;
}

console.log(greetUser('Alice'));

// Task 3: create a function with a return value that adds two numbers and returns the result
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10));

// Mini - Challenge: create a function that check if its a adult or not based on age
function isAdult(age) {
  if (age >= 18) {
    return 'You are an adult.';
  } else {
    return 'You are not an adult.';
  }
}

console.log(isAdult(20));
console.log(isAdult(15));

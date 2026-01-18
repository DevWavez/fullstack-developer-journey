// Day 1 - Variables

// String variable
let firstName = 'DevWave';

// Number variable
let age = 26;

// Boolean variable
const isDeveloper = true;

// Print to console
console.log('Name:', firstName);
console.log('Age:', age);
console.log('Is Developer:', isDeveloper);

// TASK 2

// Reassign let variable
firstName = 'CodeMaster';
age = 30;

//Attempt to reassign const variable (this will throw an error)

try {
  isDeveloper = false;
} catch (error) {
  console.log('Cannot reassign a const variable!');
}

console.log('Updated Name:', firstName);
console.log('Updated Age:', age);

// TASK 3

// Concatenate string
let greeting = 'Hello, ' + firstName + '!';

// Template literals (modern JS)
let message = `Hello, ${firstName}! You are ${age} years old.`;

console.log(greeting);
console.log(message);

// Mini-challenge

// Create variables
const color = 'red';
const number = 7;
const study = true;

const TemplateMessage = `The color is ${color}, the number is ${number}, and studying is ${study}.`;
// Print variables
console.log(TemplateMessage);

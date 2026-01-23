// TASK 1 Variables and Template Literals

const firstName = 'Alice';
const lastName = 'Smith';
const age = 25;

console.log(`Hello, ${firstName} ${lastName}! You are ${age} years old.`);

// TASK 2 Arrays + Loops

const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

for (let i = 0; i < skills.length; i++) {
  console.log(`Skill ${i + 1}: ${skills[i]}`);
}

// TASK 3 Object + Conditional
const user = { name: 'Bob', age: 17 };
if (user.age >= 18) {
  console.log(`${user.name} is an adult.`);
} else {
  console.log(`${user.name} is a minor.`);
}

// TASK 4 Functions
function greetUser(name, age) {
  return `Welcome, ${name}! You are ${age} years old.`;
}

console.log(greetUser('Charlie', 30));
console.log(greetUser('Diana', 22));

// Mini Challenge
const people = [
  { name: 'Eve', age: 20 },
  { name: 'Frank', age: 16 },
  { name: 'Grace', age: 23 },
];
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if (person.age >= 18) {
    console.log(`${person.name} is an adult.`);
  } else {
    console.log(`${person.name} is a minor.`);
  }
}

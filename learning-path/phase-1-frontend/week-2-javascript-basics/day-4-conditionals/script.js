// Task 1: simple if/else statement
let age = 18;
if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}

// Task 2: Boolean condition
const isLoggedIn = true;
if (isLoggedIn) {
  console.log('Welcome back!');
} else {
  console.log('Please log in.');
}

// Task 3: Multiple conditions with else if
const score = 75;
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}

// Mini Challenge: Multiple condition with else if
const temperature = 15;
if (temperature > 20) {
  console.log("It's warm outside.");
} else if (temperature >= 0 && temperature <= 20) {
  console.log("It's cool outside.");
} else {
  console.log("It's cold outside.");
}

/**
 * Branching
 *
 * Check Odd or Even Number
 */

let number = 10;

if (number % 2 == 0) {
  console.log(`${number} is even number`);
} else {
  console.log(`${number} is odd number`);
}

/**
 * Age categorized
 *
 * 0-12 => Children
 * 13-17 => Teenager
 * >18 => Adult
 */

let age = 80;
if (age < 13) {
  console.log("Children");
} else if (age < 18) {
  console.log("Teenager");
} else if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Invalid Input");
}

/**
 * Mafia Syndicate Rank Analysis
 *
 * Don:
 * - Over 40 years old
 * - Lives in Nevada, New York, or Havana
 * - saving_in_dollars above 10 million dollars
 *
 * Underboss:
 * - 25-40 years old
 * - Lives in New Jersey, Manhattan, or Nevada
 * - saving_in_dollars between 1 and 2 million dollars
 *
 * Capo:
 * - 18-24 years old
 * - Lives in California, Detroit, or Boston
 * - saving_in_dollars less than 1 million dollars
 */

const prompt = require(`prompt-sync`)();

let name = prompt("Input name: ");
let age = Number(prompt("Input Age: "));
let place_to_live = prompt("Input place to live: ");
let saving_in_dollars = Number(prompt("Input saving in dollars: "));

if (age > 40 && (place_to_live === "Nevada" || place_to_live === "New York" || place_to_live === "Havana") && saving_in_dollars > 10000000) {
  console.log(`${name} is likely a mafia member with Don rank.`);
} else if (age >= 25 && age <= 40 && (place_to_live === "New Jersey" || place_to_live === "Manhattan" || place_to_live === "Nevada") && saving_in_dollars >= 1000000 && saving_in_dollars <= 2000000) {
  console.log(`${name} is likely a mafia member with Underboss rank.`);
} else if (age >= 18 && age <= 24 && (place_to_live === "California" || place_to_live === "Detroit" || place_to_live === "Boston") && saving_in_dollars < 1000000) {
  console.log(`${name} is likely a mafia member with Capo rank.`);
} else {
  console.log(`${name} is not suspicious.`);
}
  
  
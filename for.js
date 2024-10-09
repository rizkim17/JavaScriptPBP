// print 1 - 10

for (let i = 1; i < 11; i++) {
  console.log(`Looping: ${i}`);
}
console.log("---------------------");
//print 10, 20, 30, 40 - 100
for (let j = 10; j <= 100; j += 10) {
  console.log(`Looping: ${j}`);
}
console.log("---------------------");
//print 100, 90, 80, 70, .... 0
for (let k = 100; k >= 0; k -= 10) {
  console.log(`Decrease: ${k}`);
}
console.log("---------------------");
//print 1, -2, 3, -4, 5, -6...-10 without if
let sign = 1;
for (let l = 1; l <= 10; l++) {
  console.log(l * sign);
  sign = sign * -1;
}
console.log("---------------------");
//check the number is prime or not
let num = 12;
let factor = 0;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    factor++;
  }
}
if (factor == 2) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime numer`);
}
console.log("---------------------");
//factorial number =5! print 1*2*3*4*5 = 120
function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(6));
console.log("---------------------");
//factorial without function
let numb = 5;
let result = 1;
for (let i = 1; i <= numb; i++) {
  result += i;
}
console.log(`${numb}! is ${result}`);

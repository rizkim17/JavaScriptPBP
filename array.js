let data = [10, 20, 30, 40];
//access array
console.log(data[1]);
//change array
data[2] = 100;
console.log(data[2]);
//add array element in last element
data.push(80);
console.log(data);
//add array element in first element
data.unshift(90);
console.log(data);
//remove last element
data.pop();
console.log(data);
//remove first element
data.shift();
console.log(data);
//data length
data.length;
console.log(data);
console.log("---------------------");
//Mean
let result = 0;
for (let i = 0; i < data.length; i++) {
  result += data[i];
}
console.log(`the mean of the data is ${result / data.length}`);

//
let country = [
  "Indonesia",
  "India",
  "Japan",
  "South Sudan",
  "Sweden",
  "Jamaica",
];
//please grouping the country by first letter
//["Indonesia", "India"]
//["Japan","Jamaica"]
//["South Sudan", "Sweden"]
let countryI = [];
let countryJ = [];
let countryS = [];
for (let i = 0; i < country.length; i++) {
  if (country[i][0] == "I") {
    countryI.push(country[i]);
  } else if (country[i][0] == "J") {
    countryJ.push(country[i]);
  } else if (country[i][0] == "S") {
    countryS.push(country[i]);
  } else console.log("Error");
}
console.log(countryI);
console.log(countryJ);
console.log(country.S);

const prompt = require(`prompt-sync`)();
//exercise 1
let x = `x`
for(let i = 1; i <= 7; i++){
console.log(x);
x +=`x`;
}
//exercise 2
for(let num=1; num<101; num++){
if(num%3 ===0 && num %5===0){
console.log("FizzBuzz")
}
else if(num%5 ===0){
console.log("Buzz")
}
else if (num%3 ===0){
console.log("Fizz")
}
else{
console.log(num)
}
}
//exercise 3
console.log("")
console.log("how big do you want your chessboard? ");
let input = Number(prompt(""));
let hashes = "";
for (let a = 0; a < input; a++) {
for (let b = 0; b < input; b++) {
if ((a + b) % 2 == 0) {
hashes += " ";
} else {
hashes += "#";
}
}
hashes += "\n"
}
console.log(hashes);
//exercise 4
for (let num= 1; num < 51; num++) {
console.log(num);
}
for (let num= 1; num < 25; num++) {
console.log(num);
}
for (let num= 1; num < 25; num += 2) {
console.log(num);
}
for(let num = 1; num < 25; num++) {
if(num %3 == 0)
console.log(num);
}
for(let num = 1; num < 51; num++ ) {
if(num % 5 == 0) // instead of checking condition, you can increment by the multiple.
console.log(num);
}
for (let num= 1; num < 51; num++) {
let a = (num % 2 == 0)
let b = (num % 3 == 0)
let c = (!a && !b);
if ((a && b) || c) {
console.log(num) }
}
for (let num= 1; num < 101; num++) {
let a = (num % 2 == 0)
let b = (num % 3 == 0)
let c = (!a && !b);
if ((a && b) || c) {
console.log(num) }
}
//exercise 5
for (let num= 51; num > 0; num--) {
console.log(num);
}
for (let num= 24; num > 0; num--) {
console.log(num);
}
for (let num= 24; num > 1; num -= 2) {
console.log(num);
}
for(let num = 24; num > 1; num --) {
if(num %3 == 0)
console.log(num);
}
for(let num = 51; num > 11; num -- ) {
if(num % 5 == 0) // instead of checking condition, you can increment by the multiple.
console.log(num);
}
for (let num= 51; num > 1; num --) {
let a = (num % 2 == 0)
let b = (num % 3 == 0)
let c = (!a && !b);
if ((a && b) || c) {
console.log(num) }
}
for (let num= 101; num > 1; num --) {
let a = (num % 2 == 0)
let b = (num % 3 == 0)
let c = (!a && !b);
if ((a && b) || c) {
console.log(num) }
}
//exercise 6
prompt();
for (let j = 1; j <= 10; j++) {
console.log(`3 * ${j} = ${i * j}`)
}
prompt();
for (let j = 1; j <= 10; j++) {
console.log(`17 * ${j} = ${17 * j}`)
}
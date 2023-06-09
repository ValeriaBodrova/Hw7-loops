//task1
let output = "";

for (let i = 10; i <= 20; i++) {
  output += i;
  
  if (i !== 20) {
    output += ",";
  }
}

console.log(output);

//task2

for (let i = 10; i <= 20; i++) {
    let square = i * i;
    console.log(square);
  }

  //task3

  for (let i = 1; i <= 9; i++) {
    let multiply = 7 * i;
    let result = `7 * ${i} = ${multiply}`
    console.log(result);
  }

  //task4

 let sum = 0;

for (let i = 1; i <= 15; i++) {
  sum += i;
}

console.log(sum);

//task5


let product = 1;

for (let i = 15; i <= 35; i++){
    product *= i;
}
console.log(product);

//task6

let sum61 = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
   sum61 += i;
   count++;
  }
let average = sum61 / count;
  console.log(average);

//task7
  let sum71 = 0;

  for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
      sum71 += i;
    }
  }
  
  console.log(sum);

//task8

for (let i = 100; i <= 200; i++) {
   console.log(i);
  }
  
//task9

let number = parseInt(prompt("Enter a natural number"));


for (let i = 1; i <= number; i++){
if (number % i === 0){
   console.log(i);
}

}
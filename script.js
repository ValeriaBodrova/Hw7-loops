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
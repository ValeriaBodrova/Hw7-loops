//task1
let output = "";

for (let i = 10; i <= 20; i++) {
  output += i;
  
  if (i !== 20) {
    output += ",";
  }
}

console.log(output);

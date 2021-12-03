const fs = require('fs');

function getInput(day) {
  const data = fs.readFileSync('inputs/' + day + '.txt', 'utf8')
  return data;
}

let one = getInput(1);
let values = one.split("\n").map(n => parseInt(n));

var count = 0;
for (let i = 0; i < values.length - 2; i++)
{
  count = (values[i] < values[i + 3]) ? count + 1 : count;
}
console.log(count);
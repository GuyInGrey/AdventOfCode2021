const fs = require('fs');
function getInput(day) {
  const data = fs.readFileSync('puzzles/inputs/' + day + '.txt', 'utf8')
  return data;
}

exports.run = () => {
  let two = getInput(2);
  let lines = two.split('\n');
  
  let x = 0;
  let depth = 0;
  let aim = 0;
  
  for (let line of lines) {
    let v = parseInt(line.split(' ')[1]);
    
    switch (line.split(' ')[0]) {
      case 'forward':
        x += v;
        depth += (v * aim);
        break;
      case 'up':
        aim -= v;
        break;
      case 'down':
        aim += v;
        break;
    }
  }
  
  console.log((x * depth));
}
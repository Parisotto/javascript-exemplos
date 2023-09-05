var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0])
let dentro = 0
let fora = 0

for(let i = n; i > 0; i--){
    let valor = parseInt(lines[i])
    if(valor >= 10 && valor <= 20){
        dentro += 1
    } else {
        fora += 1
    }
}

console.log(`${dentro} in`)
console.log(`${fora} out`)

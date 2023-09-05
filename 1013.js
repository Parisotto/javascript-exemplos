var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

let maior = (parseInt(lines[0]) + parseInt(lines[1]) + Math.abs(lines[0] - lines[1]))/2
maior = (maior + parseInt(lines[2]) + Math.abs(maior - lines[2]))/2

console.log("%d eh o maior", maior)

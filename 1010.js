var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var l1 = lines[0].split(" ")
var l2 = lines[1].split(" ")

var pagar = l1[1] * l1[2].split("\r", 1)
pagar += l2[1] * l2[2].split("\r", 1)

console.log("VALOR A PAGAR: R$ " + pagar.toFixed(2))

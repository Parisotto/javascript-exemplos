let dados = require('fs').readFileSync('dev/stdin', 'utf8');
let linhas = dados.split('\n');

let n1 = parseInt(linhas.shift())
let n2 = parseInt(linhas.shift())

let soma = n1 + n2

console.log("X = " + soma)

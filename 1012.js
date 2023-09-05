let input = require('fs').readFileSync('dev/stdin', 'utf8')
let lines = input.split(' ')

console.log("TRIANGULO:", (lines[0] * lines[2] / 2).toFixed(3))
console.log("CIRCULO:", (3.14159 * Math.pow(lines[2], 2)).toFixed(3))
console.log("TRAPEZIO:", ((parseFloat(lines[0]) + parseFloat(lines[1])) * lines[2] / 2).toFixed(3))
console.log("QUADRADO:", (Math.pow(lines[1], 2)).toFixed(3))
console.log("RETANGULO:", (lines[0] * lines[1]).toFixed(3))

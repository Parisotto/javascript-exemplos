var input = require("fs").readFileSync("dev/stdin", "utf8")

let valor = parseInt(input)
let msg = "nota(s) de R$"

console.log(valor)

console.log(`${Math.floor(valor/100)} ${msg} 100,00`)
valor %= 100
console.log(`${Math.floor(valor/50)} ${msg} 50,00`)
valor %= 50
console.log(`${Math.floor(valor/20)} ${msg} 20,00`)
valor %= 20
console.log(`${Math.floor(valor/10)} ${msg} 10,00`)
valor %= 10
console.log(`${Math.floor(valor/5)} ${msg} 5,00`)
valor %= 5
console.log(`${Math.floor(valor/2)} ${msg} 2,00`)
valor %= 2
console.log(`${Math.floor(valor)} ${msg} 1,00`)

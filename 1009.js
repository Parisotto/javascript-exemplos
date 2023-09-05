let dados = require("fs").readFileSync("dev/stdin", "utf8")
let linhas = dados.split("\n")

let nome = linhas.shift()
let salario = parseFloat(linhas.shift())
let vendas = parseFloat(linhas.shift())

console.log("TOTAL = R$ " + (salario + vendas * .15).toFixed(2))

let dados = require("fs").readFileSync("dev/stdin", "utf8")
let linhas = dados.split("\n")

let func = parseInt(linhas.shift())
let horas = parseInt(linhas.shift())
let valor = parseFloat(linhas.shift())

console.log("NUMBER = " + func)
console.log("SALARY = U$ " + (horas * valor).toFixed(2))

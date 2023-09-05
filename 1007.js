let dados = require("fs").readFileSync("dev/stdin", "utf8")
let linhas = dados.split("\n")

let a = parseInt(linhas.shift())
let b = parseInt(linhas.shift())
let c = parseInt(linhas.shift())
let d = parseInt(linhas.shift())

let dif = a * b - c * d

console.log("DIFERENCA = " + dif)

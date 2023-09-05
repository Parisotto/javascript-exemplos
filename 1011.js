var input = require('fs').readFileSync('dev/stdin', 'utf8');
var volume = 4.0/3 * 3.14159 * Math.pow(parseFloat(input), 3) 
console.log("VOLUME = %d", volume.toFixed(3))

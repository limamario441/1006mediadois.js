var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var distanciaTotal = valores.shift();
var valorReal = valores.shift();
var consumoMedio = distanciaTotal / valorReal ;


console.log(consumoMedio.toFixed(3) +  ' km/l');







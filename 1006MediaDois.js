
var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');

var numberText = lines
var noteA = parseFloat(numberText[0]);
var noteB = parseFloat(numberText[1]);
var noteC = parseFloat(numberText[2]);

 var avarge = (((noteA * 2) + (noteB * 3) + (noteC * 5))/10).toFixed(1);
 

 console.log(`MEDIA = ${avarge}`);

/* 
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var media = (A*1 + B*2 + C*5) /10;

console.log("MEDIA = " + media.toFixed(1));

 */


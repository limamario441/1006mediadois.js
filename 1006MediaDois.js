
var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split("\n");


var numberText = lines
var noteA = parseInt(numberText[0]);
var noteB = parseInt(numberText[1]);
var noteC = parseInt(numberText[2]);

 var avarge = (((noteA * 2) + (noteB * 3) + (noteC * 5))/10).toFixed(1);
 

 console.log(`MEDIA = ${avarge}`);




/* 
console.log(numberTextOne[0]);
//console.log(numberTextTwo);
//console.log(numberTextThree); */

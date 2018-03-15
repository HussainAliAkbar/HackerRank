//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/plus-minus/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node plusMinus.js < file.txt

'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseFloat(parseInt(readLine()));
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    let pos = 0;
    let neg = 0;
    let neu = 0;
    arr.forEach(a => {
        pos = a > 0 ? pos+1 : pos;
        neg = a < 0 ? neg+1 : neg;
        neu = a == 0 ? neu+1 : neu;
    });
    console.log(`${parseFloat(parseFloat(pos)/n).toPrecision(6)}\n${parseFloat(parseFloat(neg)/n).toPrecision(6)}\n${parseFloat(parseFloat(neu)/n).toPrecision(6)}`)

}

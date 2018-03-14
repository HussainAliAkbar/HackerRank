//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/find-digits/problem
//-------------------------------------------------------

//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node findDigits.js < file.txt

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

function findDigits(n) {
    let digits = n.toString().split('');
    let counter = 0;
    digits.forEach(digit => {
        counter = digit !== 0 && n % parseInt(digit) === 0 ? counter + 1 : counter;
    });
    return counter;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var result = findDigits(n);
        process.stdout.write("" + result + "\n");
    }

}

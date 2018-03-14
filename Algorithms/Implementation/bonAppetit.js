//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/bon-appetit/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node bonAppetit.js < file.txt

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

function bonAppetit(n, k, b, ar) {
    let bAc = 0;
    let output = '';
    for (let i = 0; i < n; i++) {
        bAc = i !== k ? bAc + ar[i] : bAc;
    }
    return bAc/2 === b ? 'Bon Appetit' : b - bAc/2;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    let ar = readLine().split(' ');
    ar = ar.map(Number);
    var b = parseInt(readLine());
    var result = bonAppetit(n, k, b, ar);
    process.stdout.write("" + result + "\n");

}

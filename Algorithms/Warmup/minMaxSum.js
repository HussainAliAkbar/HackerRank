//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/mini-max-sum/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node minMaxSum.js < file.txt

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
    let arr = readLine().split(' ');
    arr = arr.map(Number);
    arr = arr.sort();
    
    let max = 0;
    let min = 0;
    
    for (let i = 0 ; i < arr.length - 1 ; i++) {
        min = min + arr[i]
    }
    
    
    for (let i = arr.length - 1 ; i >= 1 ; i--) {
        max = max + arr[i]
    }
    
    console.log(min, max)

}

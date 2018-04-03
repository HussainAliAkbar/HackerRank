
//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/missing-numbers/problem
//-------------------------------------------------------

//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node missingNumbers.js < file.txt

'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
const _ = require('lodash');

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

function missingNumbers(arr, brr) {
    let arrCounts = _.countBy(arr);
    let brrCounts = _.countBy(brr);
    let keys = _.union(Object.keys(arrCounts), Object.keys(brrCounts));
    let result = [];
    keys.forEach(key => {
        if (arrCounts[key] !== brrCounts[key])
            result.push(key);
    });
    // Just in case
    return result.sort()
}

function main() {
    var n = parseInt(readLine());
    let arr = readLine().split(' ');
    arr = arr.map(Number);
    var m = parseInt(readLine());
    let brr = readLine().split(' ');
    brr = brr.map(Number);
    var result = missingNumbers(arr, brr);
    console.log(result.join(" "));



}

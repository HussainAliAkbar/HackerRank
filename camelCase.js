
//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/camelcase/problem
//-------------------------------------------------------

//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node cameCase.js < file.txt


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

const isUpperCase = (s) => s === s.toUpperCase();

function camelcase(s) {
    let total = 1;
    for (let i = 1 ; i < s.length; i++) {
        if (isUpperCase(s[i])) total++;
    }
    return total;


}

function main() {
    var s = readLine();
    var result = camelcase(s);
    process.stdout.write("" + result + "\n");

}
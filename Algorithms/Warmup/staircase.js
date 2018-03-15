//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/staircase/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node staircase.js < file.txt

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
    var n = parseInt(readLine());
    let count = n-1;
    let str = ``;
    for (let i = 0 ; i < n ; i++) {
        for (let j = 0 ; j < n; j++) {
            str = j < count ? str + ' ' : str + '#';
        }
        count = count - 1;
        str = str + '\n';
    }
    console.log(str)

}

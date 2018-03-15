//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/diagonal-difference/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node diagonalDifference.js < file.txt

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
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    let prim = 0;
    let sec = 0;
    for (let i = 0 ; i < n ; i++) {
        prim+= a[i][i];
    }
    
    let tmp = 0;
    for (let i = n-1  ; i >= 0 ; i--) {
        sec+= a[i][tmp]
        tmp++;
    }
    console.log(Math.abs(prim-sec))

}

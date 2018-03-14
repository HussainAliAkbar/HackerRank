
//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/between-two-sets/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node betweenTwoSets.js < file.txt

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

function getTotalX(a, b) {
    let iters = b.reduce((x, y) => {return Math.max(x,y)});
    let output = 0;
    for (let i = 1 ; i <= iters; i++) {
        if (a.every(x => i%x === 0) && b.every(y => y%i === 0)) output++;
    }
    return output;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    let a = readLine().split(' ');
    a = a.map(Number);
    let b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write("" + total + "\n");

}

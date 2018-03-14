//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/angry-professor/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node angryProfessor.js < file.txt

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

function angryProfessor(k, a) {
    return a.filter(time => time <= 0).length >= k ? 'NO' : 'YES';
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        let a = readLine().split(' ');
        a = a.map(Number);
        var result = angryProfessor(k, a);
        process.stdout.write("" + result + "\n");
    }

}


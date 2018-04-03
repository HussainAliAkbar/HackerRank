
//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/sherlock-and-array/problem
//-------------------------------------------------------

//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node sherlockAndArray.js < file.txt

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

function solve(a){
    let sum = a.reduce((acc, val) => acc + val);
    let left = 0;
    let result = 'NO';
    for (let i = 0 ; i < a.length; i++) {
        sum -= a[i];
        if (left === sum) {
            result = 'YES';
            break;
        }
        left += a[i];
    }
    return result;
}

function main() {
    var T = parseInt(readLine());
    for(var a0 = 0; a0 < T; a0++){
        var n = parseInt(readLine());
        let a = readLine().split(' ');
        a = a.map(Number);
        var result = solve(a);
        process.stdout.write(""+result+"\n");
    }

}

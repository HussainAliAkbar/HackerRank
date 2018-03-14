
//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node breakingTheRecords.js < file.txt

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

function breakingRecords(score) {
    let highest = 0, lowest = 0;
    let most = score[0], least = score[0];
    score.forEach((sco, index) => {
        if (sco > most && index !== 0) {
            most = sco;
            highest++;
        }
        else if (sco < least && index !== 0) {
            least = sco;
            lowest++;
        }
    });
    return [highest, lowest];
}

function main() {
    var n = parseInt(readLine());
    let score = readLine().split(' ');
    score = score.map(Number);
    var result = breakingRecords(score);
    console.log(result.join(" "));



}

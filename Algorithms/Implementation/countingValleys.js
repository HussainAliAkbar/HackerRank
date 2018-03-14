//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/counting-valleys/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node countingValleys.js < file.txt

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

function countingValleys(n, s) {
    let steps = s.split('');
    let valleys = 0;
    let currentlyAt = 0;
    for (let i = 0 ; i < steps.length ; i++) {
        if (currentlyAt === 0 && steps[i] === 'D') {
            valleys++;
        }
        currentlyAt = steps[i] === 'U' ? currentlyAt + 1 : currentlyAt - 1;
    }
    
    return valleys;
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = countingValleys(n, s);
    process.stdout.write("" + result + "\n");

}

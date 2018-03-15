//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/time-conversion/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node timeConversion.js < file.txt

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

function timeConversion(s) {
    let bits = s.split(':');
    let hrs = bits[0];
    let mins = bits[1];
    let secs = bits[2].substr(0,2);
    let ampm = bits[2].substr(2,2);
    
    if (hrs === '12' && ampm === 'AM') {
        hrs = '00';
    }
    if (hrs !== '12' && ampm === 'PM') {
        hrs = (+hrs + 12).toString();
    }
    return `${hrs}:${mins}:${secs}`;
    
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}

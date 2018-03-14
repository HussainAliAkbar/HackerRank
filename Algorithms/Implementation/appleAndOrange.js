
//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/apple-and-orange/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node appleAndOrange.js < file.txt

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

function appleAndOrange(s, t, a, b, apple, orange) {
    let appleDistances = apple.map(ap => +ap + a);
    let orangeDistanes = orange.map(or => +or + b);
    let output = [];
    output.push(appleDistances.filter(ap => ap >= s && ap <= t).length);
    output.push(orangeDistanes.filter(or => or >= s && or <= t).length);
    return output;
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    let apple = readLine().split(' ');
    apple = apple.map(Number);
    let orange = readLine().split(' ');
    orange = orange.map(Number);
    var result = appleAndOrange(s, t, a, b, apple, orange);
    console.log(result.join("\n"));



}

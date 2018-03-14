//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node beautifulDayAtTheMovies.js < file.txt

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

const isInt = (i) => i% 1 === 0;
const reverseNumber = (i) => i.split("").reverse().join("");

function beautifulDays(i, j, k) {
    let beautifulDays = 0;
    for (let originalDay = i ; originalDay <= j ; originalDay++) {
        
        let reversedDay = +reverseNumber(originalDay.toString());
        beautifulDays = isInt((Math.abs(originalDay - reversedDay) / k)) ? beautifulDays + 1 : beautifulDays;
    }
    return beautifulDays;
}

function main() {
    var i_temp = readLine().split(' ');
    var i = parseInt(i_temp[0]);
    var j = parseInt(i_temp[1]);
    var k = parseInt(i_temp[2]);
    var result = beautifulDays(i, j, k);
    process.stdout.write("" + result + "\n");

}

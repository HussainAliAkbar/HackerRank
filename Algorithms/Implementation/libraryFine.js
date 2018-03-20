//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/library-fine/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node libraryFine.js < file.txt

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

const getYearFine = () => 10000;
const getMonthFine = (monthsLate) => monthsLate * 500;
const getDayFine = (daysLate) => daysLate * 15;

function libraryFine(d1, m1, y1, d2, m2, y2) {
    const isYearGreater = (y1, y2) => y1 > y2;
    const isMonthGreater = (m1, m2) => m1 > m2;
    const isDayGreater = (d1, d2) => d1 > d2;
    const isYearEqual = (y1, y2) => y1 === y2;
    const isMonthEqual = (m1, m2) => m1 === m2;
    const isDayEqual = (d1, d2) => d1 === d2;
    
    return isYearGreater(y1, y2) ? getYearFine() : 
    isYearEqual(y1, y2) && isMonthGreater(m1, m2) ? getMonthFine(m1 - m2) :
    isYearEqual(y1, y2) && isMonthEqual(m1, m2) && isDayGreater(d1, d2) ? getDayFine(d1 - d2) : 0;
    
}

function main() {
    var d1_temp = readLine().split(' ');
    var d1 = parseInt(d1_temp[0]);
    var m1 = parseInt(d1_temp[1]);
    var y1 = parseInt(d1_temp[2]);
    var d2_temp = readLine().split(' ');
    var d2 = parseInt(d2_temp[0]);
    var m2 = parseInt(d2_temp[1]);
    var y2 = parseInt(d2_temp[2]);
    var result = libraryFine(d1, m1, y1, d2, m2, y2);
    process.stdout.write("" + result + "\n");

}

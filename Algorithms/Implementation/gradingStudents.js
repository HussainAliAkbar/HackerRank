//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/grading/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node gradingStudents.js < file.txt

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

function solve(grades){
    const round5 = (x) => Math.ceil(x/5)*5;
    let arr = [];
    grades.forEach(g => {
        if (g < 38) {
            arr.push(g)
        }
        else if (round5(g) - g  < 3) {
            arr.push(round5(g));
        }
        else {
            arr.push(g);
        }
    });
    return arr;
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
    


}

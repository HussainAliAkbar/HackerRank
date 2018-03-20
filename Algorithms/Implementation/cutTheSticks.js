//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/cut-the-sticks/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node cutTheSticks.js < file.txt

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

const getMinElement = (arr) => arr.reduce((previous,current) => previous < current ? previous : current);
const isEqualToZero = (element) => element === 0;


function cutTheSticks(arr) {
    let minElement = getMinElement(arr);
    let continueIterations = true;
    let result = [];
    arr = arr.filter(element => element !== 0);
    
    while (continueIterations) {
        let elementsCut = 0;
        arr = arr.map(element => {
             element = element - minElement;
             elementsCut++;
        return element;
        }).filter(element => element !== 0);
        
        result.push(elementsCut);
        
        if (arr.length) {
            minElement = getMinElement(arr);
            continueIterations = !arr.every(isEqualToZero);   
        }
        else {
            continueIterations = false;
        }
    }
    
    return result;
}

function main() {
    var n = parseInt(readLine());
    let arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = cutTheSticks(arr);
    console.log(result.join("\n"));
}

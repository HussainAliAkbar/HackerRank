
//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/icecream-parlor/problem
//-------------------------------------------------------

//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node iceCreamParlor.js < file.txt

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

function icecreamParlor(m, arr) {
    let result = [];
    let breakCondition = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0 ; j < arr.length; j++) {
                if (i !== j && arr[i] + arr[j] === m) {
                result.push(i+1);
                result.push(j+1);
                breakCondition  = true;
                break;
            }
        }
        if (breakCondition) break;
    }
    return result;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        let arr = readLine().split(' ');
        arr = arr.map(Number);
        var result = icecreamParlor(m, arr);
        console.log(result.join(" "));


    }

}

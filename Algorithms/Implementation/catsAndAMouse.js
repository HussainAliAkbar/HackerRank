//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node catsAndAMouse.js < file.txt

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

function catAndMouse(x, y, z) {
    return Math.abs(x-z) < Math.abs(y-z) ? ['Cat A'] : Math.abs(x-z) > Math.abs(y-z) ? ['Cat B'] : ['Mouse C'];
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        var result = catAndMouse(x, y, z);
        console.log(result.join(" "));


    }

}

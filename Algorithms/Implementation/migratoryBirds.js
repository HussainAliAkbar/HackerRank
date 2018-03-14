//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/migratory-birds/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node migratoryBirds.js < file.txt
// 3. Lodash is needed in order to run this

'use strict';

process.stdin.resume();
process.stdin.setEncoding('ascii');
let _ = require('lodash')

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

function migratoryBirds(n, ar) {
    let result = null;
    let uniq = _.uniq(ar);
    let obj = {};
    uniq.forEach(u => {
        let tmp = ar.filter(a => a === u);
        obj[u] = tmp.length
    });
    Object.keys(obj).forEach(o => {
        if (result === null) result = o;
        else if (obj[o] > obj[result]) result = o;
    });
    return result;
}

function main() {
    var n = parseInt(readLine());
    let ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    process.stdout.write("" + result + "\n");

}

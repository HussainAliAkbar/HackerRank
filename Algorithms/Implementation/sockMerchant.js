//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/sock-merchant/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node sockMerchant.js < file.txt

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

function sockMerchant(n, ar) {
    let uniqAr = ar.filter((value, index, array) => { 
    return array.indexOf(value) == index;
});
    let map = {};
    uniqAr.forEach((elem) => {
        let count = ar.filter(a => a === elem).length;
        map[elem] = count;
    });
    let output = 0;
    Object.keys(map).forEach(key => {
        output += Math.floor(map[key]/2);
    });
    return output;
}

function main() {
    var n = parseInt(readLine());
    let ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = sockMerchant(n, ar);
    process.stdout.write("" + result + "\n");

}

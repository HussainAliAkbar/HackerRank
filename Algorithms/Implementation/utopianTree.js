//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/utopian-tree/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node utopianTree.js < file.txt

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

function utopianTree(n) {
    let height = 1;
    
    //base case
    if (n === 0) return height;
    
    for (let i = 1 ; i <= n; i++) {
        //if n is odd then double else increase 1
        height = i % 2 !== 0 ? height * 2 : height + 1;
    }
    return height;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var result = utopianTree(n);
        process.stdout.write("" + result + "\n");
    }

}

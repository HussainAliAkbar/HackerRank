//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/the-birthday-bar/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node birthdayChocolate.js < file.txt

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

function solve(n, s, d, m){
    let count = 0;
    
    for (let i = 0 ; i < n ; i++) {
    let tmpTotal = 0;    
    let tmpM = 0;    
        for (let j = i; j < n; j++) {
            
            tmpM++;
            tmpTotal = tmpTotal + s[j];
            
            if (tmpTotal === d && tmpM === m) {
                count++;
                break;
            }
            else if (tmpTotal > d || tmpM > m) {
                break;
            }
        }
    }
    
    return count;
}

function main() {
    var n = parseInt(readLine());
    let s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = solve(n, s, d, m);
    process.stdout.write(""+result+"\n");

}

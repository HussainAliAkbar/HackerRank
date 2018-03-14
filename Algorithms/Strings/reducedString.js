//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/reduced-string/problem
//-------------------------------------------------------

//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node reducedString.js < file.txt

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
function super_reduced_string(s){
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            s = s.split('').filter((element, index) => index !== i && index !== i-1).join('');
            i = 0;   
        }
    }
    return s !== '' ? s : 'Empty String';
}

function main() {
    var s = readLine();
    var result = super_reduced_string(s);
    process.stdout.write("" + result + "\n");

}

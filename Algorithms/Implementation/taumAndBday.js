//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/taum-and-bday/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node taumAndBday.js < file.txt
// 3. You will need the module of bignumber.js in order to run this

'use strict';



process.stdin.resume();
process.stdin.setEncoding('ascii');
let BigNumber = require('bignumber.js')

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

function taumBday(b, w, x, y, z) {
    b = new BigNumber(b);
    w = new BigNumber(w);
    x = new BigNumber(x);
    y = new BigNumber(y);
    z = new BigNumber(z);
    
    //we will do every possible combination which in this case is 3. We need to use bignumber.js to pass all test cases
    
    let bTimesX = b.times(x);
    let wTimesY = w.times(y);
    let wTimesXPlusZ = w.times(x.plus(z));
    let bTimesYPlusZ = b.times(y.plus(z));
    
    let combA = bTimesX.plus(wTimesY);
    let combB = bTimesX.plus(wTimesXPlusZ);
    let combC = wTimesY.plus(bTimesYPlusZ);
    return combA.lte(combB) && combA.lte(combC) ? combA : combB.lte(combA) && combB.lte(combC) ? combB : combC;
    
    
    
    //Solution without bignumber.js
    // let combA = (b*x) + (w*y);
    // let combB = (b*x) + (w*(x+z));
    // let combC = (w*y) + (b*(y+z));
    // return Math.min(combA, combB, combC);
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var b_temp = readLine().split(' ');
        var b = parseInt(b_temp[0]);
        var w = parseInt(b_temp[1]);
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        var result = taumBday(b, w, x, y, z);
        process.stdout.write("" + result + "\n");
    }

}

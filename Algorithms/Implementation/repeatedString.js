//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/repeated-string/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node repeatedString.js < file.txt

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
  const countA = (str) => str.split('a').length - 1;
  const iterations = Math.floor(n / s.length);
  const remaining = n - (iterations * s.length);
  return (countA(s) * iterations) + countA(s.substr(0, remaining));
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const n = parseInt(readLine(), 10);

  let result = repeatedString(s, n);

  ws.write(result + "\n");

  ws.end();
}

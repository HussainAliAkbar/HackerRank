//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/strange-advertising/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node strangeAdvertising.js < file.txt

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

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
  let shared = 5;
  let liked = 2;
  let cumulative = 2;
  let furtherShared = 3;
  // we're skipping day one
  for (let i = 1; i < n; i++) {
    shared = Math.floor(shared / 2) * furtherShared;
    liked = Math.floor(shared / 2);
    cumulative += liked;
  }
  return cumulative;


}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let result = viralAdvertising(n);

  ws.write(result + "\n");

  ws.end();
}

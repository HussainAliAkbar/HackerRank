//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/the-hurdle-race/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node theHurdleRace.js < file.txt

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

// Complete the hurdleRace function below.
function hurdleRace(k, height) {
  const highestHurdle = Math.max(...height);
  if (highestHurdle > k) return highestHurdle - k;
  else return 0;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(' ');

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const height = readLine().split(' ').map(heightTemp => parseInt(heightTemp, 10));

  let result = hurdleRace(k, height);

  ws.write(result + "\n");

  ws.end();
}

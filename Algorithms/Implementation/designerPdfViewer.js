//-------------------------------------------------------
//Problem Statement:
//https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
//-------------------------------------------------------


//Language: Javascipt (Node.js)

//Instructions to run:
// 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
// 2. run in terminal: node designerPdfViewer.js < file.txt

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


    
function initMap(h) {
    return {
        'a': h[0],
        'b': h[1],
        'c': h[2],
        'd': h[3],
        'e': h[4],
        'f': h[5],
        'g': h[6],
        'h': h[7],
        'i': h[8],
        'j': h[9],
        'k': h[10],
        'l': h[11],
        'm': h[12],
        'n': h[13],
        'o': h[14],
        'p': h[15],
        'q': h[16],
        'r': h[17],
        's': h[18],
        't': h[19],
        'u': h[20],
        'v': h[21],
        'w': h[22],
        'x': h[23],
        'y': h[24],
        'z': h[25],
    
}
}    

function designerPdfViewer(h, word) {
    const alphabetToHeighMap = initMap(h);
    const maxHeight = Object.keys(alphabetToHeighMap)
    .filter(key => word.includes(key))
    .reduce((acc, w) => alphabetToHeighMap[w] > acc ? alphabetToHeighMap[w] : acc, 0);
    
    return word.length * maxHeight;
}

function main() {
    let h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    var result = designerPdfViewer(h, word);
    process.stdout.write("" + result + "\n");

}

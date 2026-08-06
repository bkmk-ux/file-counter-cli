#!/usr/bin/env node

const path = require('node:path');
const fs = require('node:fs')

const filePath = process.argv[2];

if (filePath == undefined){return console.error('error: please provide a file path')}

try {
    const fileContent = fs.readFileSync(filePath,'utf-8');

    const stats = counter(fileContent);
    
    console.log(`
        File: ${path.basename(filePath)}
        Lines: ${stats.numberOfLines}
        Words: ${stats.numberOfWords}
        Characters: ${stats.numberOfCharacters}
    `);
}catch (error) {
    console.error(`error: could not read file: ${filePath}`);
}
function counter(text) {
    const words = text.trim() ? text.trim().split(/\s+/) : [];

    return {
        numberOfLines: text.split('\n').length,
        numberOfWords: words.length,
        numberOfCharacters : text.replace(/\s/g, "").length
    };
}

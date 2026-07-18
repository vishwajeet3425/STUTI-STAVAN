import fs from 'fs';

const lines = fs.readFileSync('src/data.ts', 'utf8').split('\n');

let start = -1;
let end = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("id: 'lc_p201'")) {
        start = i;
    }
    if (lines[i].includes("id: 'lc_p210'")) {
        end = i;
    }
}

console.log(`lc_p201 found at index ${start}`);
console.log(`lc_p210 found at index ${end}`);

if (start !== -1 && end !== -1) {
    console.log("Lines of lc_p201:");
    console.log(lines.slice(start - 2, start + 10).join('\n'));
    console.log("---");
    console.log("Lines around transition to lc_p210:");
    console.log(lines.slice(end - 10, end + 5).join('\n'));
}

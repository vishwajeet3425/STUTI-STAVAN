import fs from 'fs';

const data = fs.readFileSync('src/data.ts', 'utf8');

const lc_p200_idx = data.indexOf("id: 'lc_p200'");
const lc_p201_idx = data.indexOf("id: 'lc_p201'");
const lc_p210_idx = data.indexOf("id: 'lc_p210'");

console.log('lc_p200 index:', lc_p200_idx);
console.log('lc_p201 index:', lc_p201_idx);
console.log('lc_p210 index:', lc_p210_idx);

if (lc_p200_idx !== -1) {
  console.log('\n--- LC_P200 ---');
  console.log(data.substring(lc_p200_idx - 10, lc_p200_idx + 300));
}
if (lc_p201_idx !== -1) {
  console.log('\n--- LC_P201 ---');
  console.log(data.substring(lc_p201_idx - 10, lc_p201_idx + 300));
}
if (lc_p210_idx !== -1) {
  console.log('\n--- LC_P210 ---');
  console.log(data.substring(lc_p210_idx - 10, lc_p210_idx + 300));
}

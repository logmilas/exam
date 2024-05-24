const fs = require('fs');

function sortOddNumbers(arr) {
    const oddNumbers = arr.filter(x => x % 2 !== 0).sort((a, b) => a - b);
    let oddIndex = 0;
    const sortedArr = arr.map(x => {
        if (x % 2 !== 0) {
            
            return oddNumbers[oddIndex++];
        } else {
            
            return x;
        }
    });

    return sortedArr;
}
const inputArrays = [
    [7, 1],
    [5, 8, 6, 3, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];
const resultText = inputArrays.map((arr, index) => {
    const sortedArr = sortOddNumbers(arr);
    return `Результаты в файле ${index + 1}: ${sortedArr.join(', ')}`;
}).join('\n');

fs.writeFileSync('exam.txt', resultText, 'utf8');
console.log(`Результаты в файлe: exam.txt`);



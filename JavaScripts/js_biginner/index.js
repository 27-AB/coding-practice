const arr = [2, 5, 6, 2, 2, 4, 5, 6, 7];

function compareNumber(a, b) {
    return a - b;
}

arr.sort(compareNumber);

let currentNumber = arr[0];
let count = 1;
let highestCount = 0;
let mostFrequentNumber = currentNumber;

for (let i = 1; i < arr.length; i++) {

    if (currentNumber === arr[i]) {
        count += 1;
    } else {

        if (count > highestCount) {
            highestCount = count;
            mostFrequentNumber = currentNumber;
        }

        currentNumber = arr[i];
        count = 1;
    }
}

if (count > highestCount) {
    highestCount = count;
    mostFrequentNumber = currentNumber;
}

console.log(mostFrequentNumber);
const numbers = [10, 20];

function addNumber(number) {
    numbers.push(number);
    return numbers.length; //this print the length of the array
}

const result = addNumber(30); // then we came here and put the length of the array in to this variable 

console.log(result);  //3
console.log(numbers); 10,20,30
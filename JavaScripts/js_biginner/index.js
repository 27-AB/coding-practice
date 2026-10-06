
const numbers = [2,4,2,4,7,7];
numbers.sort((a, b) => a - b);
 let currentNumber = numbers[0];
 let count = 1;
 let mostFrequentNumber = [];
 let highestCount = 0;
 

 for ( let i = 1; i < numbers.length; i++) {
    console.log("current:", currentNumber, "count:", count, "highest:", highestCount);
    if(currentNumber === numbers[i]){
        count ++;

    }
    else{
        if(count === highestCount){
            mostFrequentNumber.push(currentNumber);
        }
    
     else if (count > highestCount ) {
        highestCount = count;
        mostFrequentNumber = [currentNumber];
    }
    currentNumber = numbers[i];
   count = 1;
    }
    

 }
   

 if(count > highestCount){
    highestCount = count;
    mostFrequentNumber = [currentNumber];
 }
 else if (count === highestCount){
    mostFrequentNumber.push(currentNumber);
 }
 console.log(mostFrequentNumber);
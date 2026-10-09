//finding the largest number in array without sorting it it mean by using scaning

const arr = [8, 8, 8, 3, 3, 5, 5, 5, 2];
arr.sort((a,b)  => a-b);
let currentNumber = arr[0];
 let count = 1;
 let highestCount = 0;
 let mostFrequentNumber = [];
 
 //arr=[2,2,2,3,3,3,4,5,5]; sortd array

for(let i = 1; i<arr.length; i++){
   if(currentNumber === arr[i]){ // this work until 2,2,2 then the count be came 3 then the cN not equal to arr[i];
      count ++;
   }
   else{
      if(count > highestCount){
         highestCount = count;
         // then save the appers ot the current number in highestCoount for now its 3 
         mostFrequentNumber=[currentNumber];  //2
      }
      
      currentNumber=arr[i];
      count = 1;
   }

}
if(count > highestCount){
   highestCount = count;
   mostFrequentNumber = [currentNumber];
}
console.log(mostFrequentNumber);
 



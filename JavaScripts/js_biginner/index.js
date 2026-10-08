//finding the largest number in array without sorting it it mean by using scaning

const arr = [5,5,5];
 let largestNumber = arr[0];

 let secondLarger = -Infinity;

for(let i = 1; i < arr.length; i++ ){
   if(arr[i] > largestNumber){
      secondLarger = largestNumber
      largestNumber = arr[i]
      
   }
  else if(arr[i] < largestNumber && arr[i] > secondLarger){
   secondLarger = arr[i];
  }
  
}
if(secondLarger === -Infinity){
   console.log("No distinct secondLarger");
}
else{
console.log(secondLarger);
}
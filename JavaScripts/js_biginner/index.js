//finding the second large number in array 


const arr = [8,3,2,20,20,10,5,3];
function compareFunction(a,b){
    return a-b;
}
arr.sort(compareFunction);
const largest = arr[arr.length - 1];
for (let i = arr.length - 2; i > 0; i--) {
    if(arr[i] <  largest){
        console.log(arr[i]);
        break;
        
    }
}

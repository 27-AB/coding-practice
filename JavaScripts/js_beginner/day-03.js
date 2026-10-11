const tasks = [
    "Study JavaScript",
    "Practice Git",
    "Learn arrays"
];
function addTask(task){
    tasks.push(task);
}
function removeLastTask(){
    tasks.pop();
}
function hasTask(task){
   return  tasks.includes(task);
}
/*console.log(tasks);
console.log(tasks.length);
console.log(hasTask("Push to Github"));*/
/*addTask("Push to GitHub");
addTask("Practice functions");
removeLastTask();

console.log(tasks);
console.log(tasks.length);
console.log(hasTask("Push to GitHub"));

*/
const result = addTask("Push to Github");
console.log(result);

// Write your functions here

// Test your functions here

/*  
our requirements
Write a program that:
1. Creates an array containing three tasks.
2. Defines a function named addTask(task) that adds a task to the array.
3. Defines a function named removeLastTask() that removes the last task.
4. Defines a function named hasTask(task) that returns whether a task exists.
5. Prints the final task list, its length, and whether a particular task exists.
Here's your starting point:
*/
const tasks = [
    { id: 1, title: "Learn arrays", completed: true, priority: "high" },
    { id: 2, title: "Practice map", completed: false, priority: "medium" },
    { id: 3, title: "Learn filter", completed: true, priority: "high" },
    { id: 4, title: "Build a project", completed: false, priority: "high" },
    { id: 5, title: "Review JavaScript", completed: false, priority: "low" },
    { id: 6, title: "Practice objects", completed: false, priority: "high" }
];
function getIncompleteTasks(tasks){
    const result = tasks.filter(task => task.completed === false);
    return result;

}
function getHighPriorityTaskTitles(tasks){
    const result = tasks.filter(task => task.completed ===false && task.priority === "high")
    .map(task => task.title);
    return result;
}

function findTaskById(tasks, id){
    const result = tasks.find(task => task.id === id);
    return result;
}

function countCompletedTasks(tasks){
    const  result = tasks.filter(task =>task.completed === true)
    return result.length;
}


function getTaskSummary(tasks){
    const result = {
        totalTasks: tasks.length,
        completedTasks : countCompletedTasks(tasks),
        incompleteTasks : getIncompleteTasks(tasks),
        highPriorityIncompleteTasks : getHighPriorityTaskTitles(tasks),
        
    };
    
    return result;

}




   


const finalResult = getTaskSummary(tasks);
console.log(finalResult);
//Build a task summary
//Write getTaskSummary(tasks). Return an object containing totalTasks, completedTasks, incompleteTasks, and highPriorityIncompleteTasks. The last property should be an array of titles.
//*/
/* 
1. Get all incomplete tasks
Write getIncompleteTasks(tasks). Return an array containing only tasks whose completed property is false.

2. Get high-priority task titles
Write getHighPriorityTaskTitles(tasks). Return only the titles of incomplete tasks whose priority is high.

3. Find a task by ID
Write findTaskById(tasks, id). Return the task object matching the given ID. If no task matches, the result should be undefined.

4. Count completed tasks
Write countCompletedTasks(tasks). Return the number of completed tasks. You may use filter() and the array's length property.

5. Build a task summary
Write getTaskSummary(tasks). Return an object containing totalTasks, completedTasks, incompleteTasks, and highPriorityIncompleteTasks. The last property should be an array of titles.
*/
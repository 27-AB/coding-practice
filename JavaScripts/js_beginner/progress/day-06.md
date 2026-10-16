# Daily Learning Report — October 15, 2026

## Topic
JavaScript Array Methods and Data Processing

## What I Learned
Today, I practiced using JavaScript array methods to process project data for the ASTU Analytics Portal.

- `filter()` — select projects based on conditions, such as college or status.
- `map()` — transform project objects and select specific properties.
- `reduce()` — calculate total funding and other accumulated values.
- `sort()` — rank projects by funding from highest to lowest.
- `slice()` — select a specific number of items from an array.
- `length` — count the number of projects in an array.
- Spread syntax (`...`) — create a shallow copy of an array before sorting to preserve its original order.
- Optional chaining (`?.`) and nullish coalescing (`??`) — handle missing project data safely.

## Practical Work
I wrote and tested functions to:

1. Search for projects by college without being affected by capitalization.
2. Rank projects by funding and return selected project information.
3. Find the top-funded projects.
4. Calculate the total funding of the top projects in a specific college.
5. Generate a college report containing the project count, total funding, and highest-funded project.

## Challenges and Lessons
I learned that method chaining depends on the type of value each method returns. For example, `filter()` returns an array, while `reduce()` returns an accumulated value. I also learned to distinguish between an array containing an object and the object itself, and to use the correct dataset when calculating totals.

## Next Steps
- Review today's array methods and their return values.
- Continue improving JavaScript problem-solving skills.
- Practice handling empty results and invalid inputs.
- Apply these concepts to the ASTU Analytics Portal.
- Continue tracking code changes with Git.

## Self-Assessment
I can combine several array methods to solve practical data-processing problems. I still need more practice choosing the right methods and understanding the types of values they return.
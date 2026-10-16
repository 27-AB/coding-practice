const projects = [
  { name: "Smart Campus", college: "Engineering", status: "active", fundingETB: 50000 },
  { name: "Water Research", college: "Agriculture", status: "completed", fundingETB: 30000 },
  { name: "AI Research", college: "Engineering", status: "active", fundingETB: 70000 },
  { name: "Solar Energy", college: "Engineering", status: "completed", fundingETB: 20000 },
  { name: "Crop Innovation", college: "Agriculture", status: "active", fundingETB: 60000 }
];

/*   
Your function must:
1. Select projects belonging to the college, ignoring capitalization.
2. Calculate the total number of projects.
3. Calculate the total funding.
4. Find the highest-funded project.
5. Return an object containing those four results.




*/
function generateCollegeReport(projects, college){

  const filteredProjects = projects.filter(project => project.college.toLowerCase() === college.toLowerCase());
  const totalProjects  = filteredProjects.length;
  const totalFunding = filteredProjects.reduce((sum, project) => sum + project.fundingETB, 0);
  const highestFunding = [...filteredProjects].sort((a,b) => b.fundingETB - a.fundingETB)[0];

  return {
    college: college,
    totalProjects: totalProjects,
    totalFunding: totalFunding,
    highestFunding: highestFunding?.name??"project not found"
  }
}
  

console.log(generateCollegeReport(projects, "engineering"));
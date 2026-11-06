const e = require("express");

const projects = [
  { name: "Smart Campus", college: "Engineering", status: "active", fundingETB: 50000 },
  { name: "Water Research", college: "Agriculture", status: "completed", fundingETB: 30000 },
  { name: "AI Research", college: "Engineering", status: "active", fundingETB: 70000 },
  { name: "Solar Energy", college: "Engineering", status: "completed", fundingETB: 20000 },
  { name: "Crop Innovation", college: "Agriculture", status: "active", fundingETB: 60000 }
];

 
function getProjectReport(projects, college, status){
    const collegeProjects = projects.filter(project => project.college.toLowerCase() === college.toLowerCase() && project.status.toLowerCase() === status.toLowerCase());
    const totalProject = collegeProjects.length;
    const totalFunding = collegeProjects.reduce((sum, project) => sum + project.fundingETB, 0);
    const projectNames = collegeProjects.map(project => project.name);

    return {
        totalProject: totalProject,
        totalFunding: totalFunding,
        projectNames: projectNames,
        funding: totalFunding >= 100000
        ? "High funding" :
        totalFunding >= 50000 ?"Medium" : "Low funding"
    }
}

console.log(getProjectReport(projects, "engineering", "active"));
//i run this code i get the other correct but the name part shoow me undefined and i guess the problem came from when i try to result.name 
//let see result contain array of lists that satisy condition but what i want is to access the name which is the property inside list that mean like we have box which mean array then the small boxs inside the array which is lists and we want to get kind one red ball when we see the ball like property 
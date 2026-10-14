const projects = [
  { name: "Smart Campus", college: "Engineering", status: "active", fundingETB: 50000 },
  { name: "Water Research", college: "Agriculture", status: "completed", fundingETB: 30000 },
  { name: "AI Research", college: "Engineering", status: "active", fundingETB: 70000 },
  { name: "Solar Energy", college: "Engineering", status: "completed", fundingETB: 20000 },
  { name: "Crop Innovation", college: "Agriculture", status: "active", fundingETB: 60000 }
];

const activeProjects = projects.filter(
  project => project.status === "active"
);

const totalActiveFunding = activeProjects.reduce(
  (sum, project) => sum + project.fundingETB,
  0
);

const hasHighFunding = projects
  .filter(project => project.college === "Engineering")
  .some(project => project.fundingETB > 60000);

const summary = projects.map(project => ({
  name: project.name,
  fundingETB: project.fundingETB + " ETB"
}));

const allProjectsCompleted = projects.every(
  project => project.status === "completed"
);

console.log("Active projects:", activeProjects);
console.log("Total active funding:", totalActiveFunding);
console.log("Engineering has high funding:", hasHighFunding);
console.log("Project summary:", summary);
console.log("All projects completed:", allProjectsCompleted);
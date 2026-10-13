const researchProjects = [
  { name: "Smart Campus", fundingETB: 50000 },
  { name: "Water Research", fundingETB: 30000 },
  { name: "AI Research", fundingETB: 70000 },
  { name: "Solar Energy", fundingETB: 20000 }
];


const total = researchProjects.reduce((sum, p) =>

    sum + (p.fundingETB || 0),0

);

console.log(total);
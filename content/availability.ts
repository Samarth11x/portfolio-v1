export interface Role {
  title: string;
  status: 'Open' | 'Closed';
}

export const availabilityContent = {
  expectedGraduation: "2027",
  preferences: ["Remote", "Hybrid", "On-site"],
  roles: [
    { title: "Software Engineering Internship", status: "Open" },
    { title: "AI/ML Internship", status: "Open" },
    { title: "Open Source Collaboration", status: "Open" },
    { title: "Freelance Opportunities", status: "Closed" }
  ] as Role[]
};

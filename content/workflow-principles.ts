export interface WorkflowStep {
  phase: string;
  description: string;
}

export const developmentWorkflow: WorkflowStep[] = [
  { phase: 'Research', description: 'Investigating domain constraints, assessing technology choices, and validating assumptions.' },
  { phase: 'Requirements', description: 'Defining the exact scope, MVP boundaries, and success metrics for the feature or system.' },
  { phase: 'Architecture', description: 'Designing data models, API contracts, and state management strategies before touching logic.' },
  { phase: 'Implementation', description: 'Writing modular, strongly-typed code adhering to the established architectural patterns.' },
  { phase: 'Testing', description: 'Validating edge cases, handling errors gracefully, and verifying system performance.' },
  { phase: 'Review', description: 'Self-auditing code for readability, security, and potential technical debt before merging.' },
  { phase: 'Deployment', description: 'Releasing to production through automated CI/CD pipelines.' },
  { phase: 'Iteration', description: 'Gathering feedback, monitoring logs, and incrementally improving the system.' }
];

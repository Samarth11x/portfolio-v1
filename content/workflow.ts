export interface WorkflowStep {
  phase: string;
  description: string;
}

export const workflowContent: WorkflowStep[] = [
  { phase: 'Plan', description: 'Define requirements, scope the problem, and map out the architecture before writing a single line of code.' },
  { phase: 'Design', description: 'Create scalable data models, API contracts, and user interface prototypes.' },
  { phase: 'Build', description: 'Implement the solution using clean, strongly-typed code focusing on maintainability.' },
  { phase: 'Test', description: 'Verify edge cases, performance, and integrations to ensure reliability.' },
  { phase: 'Refactor', description: 'Optimize for readability, reduce technical debt, and ensure adherence to best practices.' },
  { phase: 'Deploy', description: 'Ship to production using automated pipelines and monitor for stability.' }
];

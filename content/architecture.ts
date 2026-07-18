export interface ArchitecturePrinciple {
  pattern: string;
  description: string;
}

export const architectureThinking: ArchitecturePrinciple[] = [
  { pattern: 'Content decoupled from UI', description: 'All static data is extracted into independent TypeScript modules, ensuring the UI components act purely as dumb rendering layers.' },
  { pattern: 'Single Source of Truth', description: 'Information is never duplicated. If a skill or project needs updating, it is changed in exactly one data file and propagates everywhere.' },
  { pattern: 'Server Components by default', description: 'Leveraging React Server Components (RSC) to render heavy UI on the server, shipping zero JavaScript to the client unless interactivity is explicitly required.' },
  { pattern: 'Type Safety as Documentation', description: 'Interfaces and types serve as the definitive contract for what data a component or function expects, replacing brittle comments.' },
  { pattern: 'Scalable Folder Structure', description: 'Organizing code by feature domain (components, content, lib) rather than file type, ensuring the repository remains navigable as it grows.' },
  { pattern: 'Component Composition', description: 'Building complex UIs by combining small, single-purpose components rather than writing monolithic files.' }
];

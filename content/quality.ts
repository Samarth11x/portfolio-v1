export interface QualityStandard {
  standard: string;
  why: string;
}

export const qualityStandards: QualityStandard[] = [
  { standard: 'TypeScript Strict Mode', why: 'Eliminates entire classes of runtime errors by enforcing sound type contracts and explicit null handling at compile time.' },
  { standard: 'ESLint & Prettier', why: 'Automates code styling and catches anti-patterns immediately, ensuring a consistent codebase regardless of the author.' },
  { standard: 'Responsive Design', why: 'Guarantees the software remains highly functional and aesthetically pleasing across all device form factors.' },
  { standard: 'Accessibility (a11y)', why: 'Ensures the product is usable by everyone, utilizing semantic HTML, proper contrast, and keyboard navigability.' },
  { standard: 'Performance First', why: 'Slow software is broken software. I optimize by defaulting to Server Components and minimizing client-side JavaScript.' },
  { standard: 'Meaningful Naming', why: 'Variables and functions must describe their exact purpose, reducing the cognitive load required to understand the system.' },
  { standard: 'Decoupled Architecture', why: 'Separating data layers from presentation layers allows the system to scale and be tested in isolation.' },
  { standard: 'Pre-build Validation', why: 'Failing fast locally (via linting and type-checking) prevents broken code from ever reaching the main branch or production.' }
];

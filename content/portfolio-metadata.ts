export interface TrustIndicator {
  label: string;
  value: string | boolean;
}

export const portfolioMetadata: TrustIndicator[] = [
  { label: "Portfolio Version", value: "v2.0.0" },
  { label: "Architecture", value: "React Server Components" },
  { label: "Type Safe", value: true },
  { label: "Content Decoupled", value: true },
  { label: "Performance Optimized", value: true },
  { label: "Responsive", value: true }
];

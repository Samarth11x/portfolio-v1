export interface DevTool {
  category: string;
  name: string;
}

export const toolsContent: DevTool[] = [
  { category: 'Operating System', name: 'Windows / WSL / Linux' },
  { category: 'Editor', name: 'VS Code' },
  { category: 'Version Control', name: 'Git' },
  { category: 'Terminal', name: 'PowerShell / Zsh' },
  { category: 'Package Manager', name: 'npm / pnpm' },
  { category: 'Browser', name: 'Arc / Chrome' }
];

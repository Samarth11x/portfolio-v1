export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationContent {
  main: NavItem[];
  footer: NavItem[];
}

export const navigationContent: NavigationContent = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Engineering', href: '/engineering' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: [
    { label: 'GitHub', href: 'https://github.com/Samarth11x', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/samarth', external: true },
  ],
};

export interface SocialLink {
  platform: string;
  href: string;
  external: boolean;
}

export interface SocialContent {
  github: SocialLink;
  linkedin: SocialLink;
  email: SocialLink;
  resume: SocialLink;
  location: string;
  all: SocialLink[];
}

export const socialContent: SocialContent = {
  github: {
    platform: 'GitHub',
    href: 'https://github.com/Samarth11x',
    external: true,
  },
  linkedin: {
    platform: 'LinkedIn',
    href: 'https://linkedin.com/in/samarth',
    external: true,
  },
  email: {
    platform: 'Email',
    href: 'mailto:samarthpatil3996@gmail.com',
    external: true,
  },
  resume: {
    platform: 'Resume',
    href: '/resume',
    external: false,
  },
  location: 'Earth',
  all: [
    { platform: 'GitHub', href: 'https://github.com/Samarth11x', external: true },
    { platform: 'LinkedIn', href: 'https://linkedin.com/in/samarth', external: true },
  ],
};

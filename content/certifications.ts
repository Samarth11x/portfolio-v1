export interface Certification {
  title: string;
  issuer: string;
  url?: string;
}

export const certificationsContent: Certification[] = [
  { title: 'Microsoft Azure', issuer: 'Microsoft' },
  { title: 'Linux Shell Scripting', issuer: 'Coursera' },
  { title: 'MongoDB', issuer: 'MongoDB University' },
  { title: 'HTML', issuer: 'Coursera' },
  { title: 'CSS', issuer: 'Coursera' },
  { title: 'Cloud Computing', issuer: 'Coursera' },
  { title: 'DBMS', issuer: 'Coursera' }
];

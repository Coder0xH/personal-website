import { AboutPage } from '@/components/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Dexter Ellis',
  description: 'Detailed resume and technical background of Dexter Ellis',
};

export default function About() {
  return <AboutPage />;
}

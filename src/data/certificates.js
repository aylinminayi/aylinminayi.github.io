// Certificates, newest first. Previews come from the real certificate PDFs
// (certificate ID cropped and QR code blurred).
import aiBuilderThumb from '../assets/images/certificates/ai-builder-thumb.webp';
import aiBuilderFull from '../assets/images/certificates/ai-builder.webp';
import ibmThumb from '../assets/images/certificates/ibm-cyberstart-thumb.webp';
import ibmFull from '../assets/images/certificates/ibm-cyberstart.webp';
import womenThumb from '../assets/images/certificates/future-women-leaders-thumb.webp';
import womenFull from '../assets/images/certificates/future-women-leaders.webp';

export const certificates = [
  {
    id: 'ai-builder',
    title: 'AI Builder: Vibecoding & Agents',
    issuer: 'Coderspace',
    programme: 'AI Applications Academy',
    date: 'Sep 2026',
    type: 'Certificate of participation',
    description: 'A training on building with AI tools and agents, part of Coderspace’s AI Applications Academy.',
    thumb: aiBuilderThumb,
    full: aiBuilderFull,
    alt: 'Coderspace AI Applications Academy certificate of participation for Aylin Minayi, AI Builder: Vibecoding & Agents, 12.09.2026.',
    accent: 'lavender',
  },
  {
    id: 'ibm-cyberstart',
    title: 'IBM ile Kodluyoruz: CyberStart 2.0',
    issuer: 'Kodluyoruz × IBM SkillsBuild',
    programme: 'Beginner level',
    date: 'Mar — Apr 2026',
    type: 'Certificate of participation',
    description: 'A six-week introductory cybersecurity training programme.',
    thumb: ibmThumb,
    full: ibmFull,
    alt: 'Kodluyoruz and IBM SkillsBuild CyberStart 2.0 beginner-level certificate of participation for Aylin Minayi, 16.03.2026 – 26.04.2026.',
    accent: 'blue',
  },
  {
    id: 'future-women-leaders',
    title: 'Future Women Leaders: AI & Career',
    issuer: 'Coderspace × Ford Otosan × Vehbi Koç Foundation',
    programme: 'Gelecek Hayalim awareness programme',
    date: 'Dec 2025',
    type: 'Certificate of participation',
    description: 'An event on artificial intelligence and career development for future women leaders.',
    thumb: womenThumb,
    full: womenFull,
    alt: 'Gelecek Hayalim certificate of participation for Aylin Minayi, Future Women Leaders: AI and Career, 22.12.2025.',
    accent: 'sun',
  },
];

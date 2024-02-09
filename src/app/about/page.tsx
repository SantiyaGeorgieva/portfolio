import { Metadata } from 'next';
import AboutComponent from '../components/AboutComponent';

export const metadata: Metadata = {
  title: 'Santiya Georgieva – About'
}

export default function About() {
  return (
    <AboutComponent />
  )
}
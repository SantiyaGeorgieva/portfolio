import { Metadata } from 'next'
import ProjectsComponent from '../components/ProjectsComponent';
import Image from "../../../public/images/portfolio.jpg";

export const metadata: Metadata = {
  title: 'Santiya Georgieva – Projects',
  description: 'Frontend Engineer with customer focused entrepreneurial experience',
  keywords: 'Santiya Georgieva, portfolio, javascript, developer, react, jquery, html, css, figma, adobexd, projects',
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'qqWRx7KDlhQ2BEy9j3cl77uXKVaD7FvkYU4XjkM'
  },
  openGraph: {
    title: 'Santiya Georgieva | Frontend Web Developer',
    url: 'https://www.santiyageorgieva.com',
    type: 'website', 
    description: 'Frontend Engineer with customer focused entrepreneurial experience',
    images: `${Image}`
  },
  other: {
    classification: 'business',
    rating: 'general',
    robots: 'all',
    owner: 'Santiya Georgieva'
  }
}

export default function Projects() {
  return (
    <ProjectsComponent />
  )
}
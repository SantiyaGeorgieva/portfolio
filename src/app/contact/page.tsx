import { Metadata } from 'next';
import ContactComponent from '../components/ContactComponent';
import Image from "../../../public/images/portfolio.jpg";

export const metadata: Metadata = {
  title: 'Santiya Georgieva – Contact',
  description: 'Frontend Engineer with customer focused entrepreneurial experience',
  keywords: 'Santiya Georgieva, portfolio, javascript, developer, react, jquery, html, css, figma, adobexd, contact',
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
    images: `${Image}`,
    card: 'summary_large_image'
  },
  other: {
    classification: 'business',
    rating: 'general',
    robots: 'all',
    owner: 'Santiya Georgieva'
  }
}

export default function Contact() {
  return (
    <ContactComponent />
  )
}
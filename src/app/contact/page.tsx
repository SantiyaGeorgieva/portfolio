import { Metadata } from 'next';
import ContactComponent from '../components/ContactComponent';

export const metadata: Metadata = {
  title: 'Santiya Georgieva – Contact'
}

export default function Contact() {
  return (
    <ContactComponent />
  )
}
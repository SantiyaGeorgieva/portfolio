'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Raleway } from "next/font/google";
import localFont from 'next/font/local'
import Header from './components/header'
import Footer from './components/footer'
import Loader from '../../loader'

import './globals.scss'
import { LocalProvider } from './hooks/Context';

const racheFont = localFont({ src: './RacheRache.woff2' });

const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname(); 
  const [className, setClassName] = useState('image-background');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');

      if (loader) {
        loader.remove();
      }
    }
  }, []);

  useEffect(() => {
    if (pathname === '/about') {
      setClassName('light-background');
    } else if (pathname === '/projects' || pathname === '/contact') {
      setClassName('dark-background');
    } else {
      setClassName('image-background');
    }
  }, [pathname]);

  return (
  <LocalProvider>
    <html lang="en" className={raleway.variable}>
      <body className={className}>
        <Header classname={className} isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className={racheFont.className}>{children}</main>
        <Footer classname={className} />
        <Loader />
      </body>
      <GoogleAnalytics gaId="G-GENW7Y8LC3" />
    </html>
  </LocalProvider>
)}

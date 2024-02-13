'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import detectVersion from '../../utils/functions'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname(); 
  const [className, setClassName] = useState('image-background');
  const isMobile = detectVersion();
  // console.log('isMobile', isMobile);

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
    <html lang="en">
      <body className={className}>
        <Header classname={className} />
        <main>{children}</main>
        <Footer classname={className} />
    </body>
    <GoogleAnalytics gaId="G-GENW7Y8LC3" />
  </html>
)}

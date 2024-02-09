'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname(); 
  const [className, setClassName] = useState('image-background');

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
  </html>
)}

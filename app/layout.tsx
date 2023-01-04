'use client'
import { Navbar } from './components/Navbar'
import './globals.css'
import styles from './page.module.css'
import { David_Libre } from '@next/font/google'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const david_libre = David_Libre({
  weight: ['400', '500', '700'],
  subsets: ['hebrew', 'latin'],
  style: ['normal']
})


const themes = {
  light: '/light.css',
  dark: '/dark.css',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      <html lang="en" dir="rtl" className="bg-color">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <Navbar />
          {children}</body>
      </html>
    </ThemeSwitcherProvider>
  )
}

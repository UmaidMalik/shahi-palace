import type { Language } from '@/types/language'
import { useState } from 'react'
import { HeroSection } from './components/home/HeroSection'
import { Navbar } from './components/layout/Navbar'
import { MenuSection } from './components/menu/MenuSection'
import { AboutSection } from './components/home/AboutSection'
import { ContactSection } from './components/home/ContactSection'
import './App.css'

function PlaceholderSection({
  id,
  title,
}: {
  id: string
  title: string
}) {
  return (
    <section
      id={id}
      className="flex min-h-[70vh] scroll-mt-20 items-center justify-center border-t border-palace-border/30 px-6"
    >
      <h2 className="font-display text-5xl text-palace-cream">{title}</h2>
    </section>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main>
        <HeroSection language={language} />
        <MenuSection language={language} />
        <AboutSection language={language} />
        <ContactSection language={language} />
      </main>
    </>
  )
}

export default App

//<main className="flex min-h-screen items-center justify-center bg-[#120506]">
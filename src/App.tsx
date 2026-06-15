import { HeroSection } from './components/home/HeroSection'
import { Navbar } from './components/layout/Navbar'
import { MenuSection } from './components/menu/MenuSection'
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
  return (
    <>
      <Navbar/>
      
      <main>
        <HeroSection/>
        <MenuSection/>
        <PlaceholderSection id="about" title="A Legacy of Flavour" />
        <PlaceholderSection id="faq" title="Frequently Asked Questions" />
        <PlaceholderSection id="contact" title="Visit Us" />
      </main>
    </>
  )
}

export default App

//<main className="flex min-h-screen items-center justify-center bg-[#120506]">
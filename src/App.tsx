import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120506]">
      <h1 className="font-serif text-6xl tracking-[0.15em] text-amber-500">
        SHAHI PALACE
      </h1>
    </main>
  )
}

export default App

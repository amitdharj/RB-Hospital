import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/Home/home'
import WhyChoose from './components/Home/WhyChoose'
import StatsSection from './components/Home/StatsSection'
import ClientSection from './components/Home/ClientSection'
import News from './components/Home/NewsSection'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Home/Portfolio'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
      <WhyChoose />
      <StatsSection />
      <ClientSection />
      <Portfolio />
      <News />
      <Footer />
      
    
      
    </>
  )
}

export default App

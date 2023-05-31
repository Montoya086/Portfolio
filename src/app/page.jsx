"use client"
import './page.scss'
import './portfolio.scss'
import './contact.scss'
import { useState } from 'react'
import Header from './header.jsx'
import Homesection from './home'
import Aboutsection from './about'
import Portfolio from './portfolio'
import Card from './components/card'
import portfolioimg from './carousel_images/portfolio.png'
import medicareimg from './carousel_images/medicare.png'
import crunchyimg from './carousel_images/crunchy.png'
import blissimg from './carousel_images/bliss.png'
import memoryimg from './carousel_images/memory.png'
import Contact from './contact'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='app-content'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='body-wrapper'>
        <div className={`body-overlay ${isOpen ? "open" : "close"}`} onClick={()=>setIsOpen(false)}/>
        <Homesection/>
        <div className='section-divider'/>
        <Aboutsection/>
        <div className='section-divider-prortfolio'/>
        <Portfolio>
          <Card title="Crunchyroll, almost..."
            content={crunchyimg}
            desc="An app that tries to recreate the page Crunchyroll.com/es"
            href="https://proyecto1-web-lwcs.vercel.app"
            tecs="Next.js"
          />
          <Card title="Medicare" 
            content={medicareimg} 
            desc="A hospital administration app where you can access information about patients and hospitals." 
            href="https://hospital-proyecto-fc621.web.app"
            tecs="React.js"
            />
          <Card title="You are here!" 
            content={portfolioimg} 
            desc="My own portfolio, where you can find more about me!" 
            href="https://proyecto3-web-seven.vercel.app"
            tecs="Next.js"
            />
          <Card title="Bliss"
            content={blissimg}
            desc="A catalog organizer and shopping app that's still on progress..."
            href="https://bliss-57wr0jp78-franzcastillo.vercel.app"
            tecs="React.js"
          />
          <Card title="Memory game"
            content={memoryimg}
            desc="A memory cards game inspired in web technologies"
            href="https://lab8-memoria-c81eb.web.app"
            tecs="React.js"
          />
        </Portfolio>
        <div className='section-divider'/>
        <Contact/>
      </div>
    </div>
  )
}

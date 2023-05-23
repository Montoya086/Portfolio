"use client"
import './page.scss'
import { useState } from 'react'
import Header from './header.jsx'
import Homesection from './home'
import Aboutsection from './about'

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
      </div>
    </div>
  )
}

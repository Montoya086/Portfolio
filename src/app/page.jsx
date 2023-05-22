"use client"
import Image from 'next/image'
import './page.scss'
import { useState } from 'react'
import Header from './header.jsx'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [earth, setEarth] = useState(false)
  const [astro, setAstro] = useState(false)

  const handleEarth =()=>{
    setEarth(true)
    setTimeout(()=>{
      setEarth(false)
    }, 5000)
  }

  const handleAstro =()=>{
    setAstro(true)
    setTimeout(()=>{
      setAstro(false)
    }, 5000)
  }

  return (
    <div className='app-content'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='body-wrapper'>
        <div className={`body-overlay ${isOpen ? "open" : "close"}`} onClick={()=>setIsOpen(false)}/>
        <div className='home-wrapper'>
          <div className='stars'>
            <div className='shifting-stars'>
              <div className='star'/>
              <div className='star'/>
              <div className='star'/>
              <div className='star'/>
              <div className='star'/>
              <div className='star'/>
              <div className='star'/>
              <div className='star'/>
            </div>
          </div>
          <div className='earth-moon'>
            <img className="earth-image" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt='' onClick={handleEarth}/>
            <img className="moon-image" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt=''/>
            <h4 className={`home-text ${earth ? "shown" : ""}`}>That's Home!</h4>
          </div>
          <div className='astronaut'>
            <img className="astronaut-image" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt='' onClick={handleAstro}/>
            <h4 className={`astronaut-text ${astro ? "shown" : ""}`}>Hello friend!</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

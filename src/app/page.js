"use client"
import Image from 'next/image'
import styles from './page.scss'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='app-content'>
      <div className='header-wrapper'>
        <div className='header'>
          <div className='header-left'>
            <h4>Montoya's Portfolio</h4>
            <div className='underline'>

            </div>
          </div>
          <div className='header-right'>
            <div className='menu-button' onClick={()=>setIsOpen(!isOpen)}>
              <div className={`menu-button-bar element1 ${isOpen ? "open" : "close"}`}/>
              <div className={`menu-button-bar element2 ${isOpen ? "open" : "close"}`}/>
              <div className={`menu-button-bar element3 ${isOpen ? "open" : "close"}`}/>
            </div>
            <div className={`menu-wrapper ${isOpen ? "open" : "close"}`}>

            </div>
          </div>
        </div>
      </div>
      <div className='body-wrapper'>
        <div className={`body-overlay ${isOpen ? "open" : "close"}`} onClick={()=>setIsOpen(false)}/>
      </div>
    </div>
  )
}

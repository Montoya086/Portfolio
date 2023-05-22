"use client"
import Image from 'next/image'
import styles from './page.scss'
import { useState } from 'react'
import Header from './header.jsx'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='app-content'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='body-wrapper'>
        <div className={`body-overlay ${isOpen ? "open" : "close"}`} onClick={()=>setIsOpen(false)}/>
      </div>
    </div>
  )
}

import React from "react"
import { useEffect,useRef,useState } from "react"
import ContactCard from "./components/contactCard"
import gmail from "./card_images/gmail.png"
import github from "./card_images/github.png"
import instagram from "./card_images/instagram.png"

export default function Contact(){

    const section3Ref = useRef()
    const [isSection3Visible, setIsSection3Visible] = useState(false)
    useEffect(()=>{
        const observer3 = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setIsSection3Visible(true)
            }
        })
        observer3.observe(section3Ref.current)
    },[])

    return(
        <div className={`contact-section ${isSection3Visible ? 'visible' : ''}`} id="contact-section" ref={section3Ref}>
            <div className="stars"/>
            <div className="contact-wrapper">
                <div className="contact-area">
                    <ContactCard img={gmail} text="mon21552@uvg.edu.gt"/>
                    <ContactCard img={github} text="/Montoya086" href="https://github.com/Montoya086"/>
                    <ContactCard img={instagram} text="@amonty_086" href="https://www.instagram.com/amonty_086/"/>
                </div>
            </div>
        </div>
    )
}
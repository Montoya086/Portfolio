import React, { useEffect } from "react";
import { useState, useRef } from "react";

export default function Aboutsection() { 
    const sectionRef = useRef()
    const [isSectionVisible, setIsSectionVisible] = useState(false)
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setIsSectionVisible(true)
            }
        })
        observer.observe(sectionRef.current)
    },[])
    return(
        <div className="about-section" id="about-section">
            <div ref={sectionRef} className={`about-wrapper ${isSectionVisible ? 'visible' : ''}`}>
                <div className="about-title-wrapper">
                    <div className="about-title">
                        <h4>About Me, Myself and I</h4>
                        <div className="underline"/>
                    </div>
                </div>
                <div className="card-area">
                    <div className='card-wrapper'>
                        <div className="card-left">

                        </div>
                        <div className="card-right">

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
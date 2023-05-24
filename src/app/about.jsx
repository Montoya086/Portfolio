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
                        <div className="card-left card">
                            <div className="card-left-image">
                                <img src="https://avatars.githubusercontent.com/u/84055444?v=4" alt=""/>
                            </div>
                            <div className="card-left-text">
                                <h4>Who is this?</h4>
                                <p>
                                    My name is Andrés Montoya, I am a college student at Universidad Del Valle de Guatemala and a future engineer in computer science and IT.
                                </p>
                            </div>
                        </div>
                        <div className="card-right card">
                            <div className="card-right-text">
                                <h4>
                                    What does he do?
                                </h4>
                                <p>
                                    I am a programmer that likes to solve problems, investigate and adapt to the needs. I like both front-end and back-end development, in which I am familiar with a lot of technologies, such as: React.js, Next.js, Css, Sass, Bootstrap, Php and some others...  
                                </p>
                            </div>
                            <div className="card-right-image">
                                <img src="https://media.graphassets.com/VKHHNvEETYqZRkqgjybc" alt=""/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
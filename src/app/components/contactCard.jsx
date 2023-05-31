import Image from "next/image"
import React, { useState, useRef } from "react"
import ClipboardJS from "clipboard"

export default function ContactCard({img, text, href}){
    const [onHover, setOnHover] = useState(false)
    const [isCopy, setIsCopy] = useState(false)
    const textRef = useRef()
    const handleClick = () => {
        if(href!==""){
            const texto = textRef.current.innerText;
            const clipboard = new ClipboardJS('.contact-card', {
            text: () => texto
            });
        
            clipboard.on('success', (e) => {
            console.log('Texto copiado: ', e.text);
            setIsCopy(true)
            setTimeout(() => {
                setIsCopy(false)
            }, 2000);
            clipboard.destroy(); // Limpia el evento para evitar fugas de memoria
            });
        
            clipboard.on('error', (e) => {
            console.error('Error al copiar al portapapeles: ', e);
            clipboard.destroy();
            });
        }
    };
    return(
        <a href={href}>
            <div className={`contact-card ${onHover ? 'flipped' : ''}`} onMouseEnter={()=>setOnHover(true)} onMouseLeave={()=>setOnHover(false)} onClick={handleClick}>
                <div className="front">
                    <p ref={textRef}>{text}</p>
                </div>
                <div className="back">
                    <Image src={img} className="img"/>
                </div>
            </div>
            <div className={`alert-message ${isCopy ? 'visible' : ''}`}>
                <p>¡Copiado al portapapeles!</p>
            </div>
        </a>
    )
}
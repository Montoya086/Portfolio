import React, { useEffect,useRef } from "react";
import { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const CARDS = 10;
const MAX_VISIBILITY = 3;
export default function Portfolio ({children}){

    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    const section2Ref = useRef()
    const [isSection2Visible, setIsSection2Visible] = useState(false)
    useEffect(()=>{
        const observer2 = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setIsSection2Visible(true)
            }
        })
        observer2.observe(section2Ref.current)
    },[])
  
  return (
    <div className={`portfolio-section ${isSection2Visible ? 'visible' : ''}`} id="portfolio-section" ref={section2Ref}>
        <div className="portfolio-title">
            <h4>Some of my projects...</h4>
            <div className="underline"/>
        </div>
        <div className='carousel'>
            {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
            {React.Children.map(children, (child, i) => (
                <div className='card-container' style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                {child}
                </div>
            ))}
            {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
        </div>
    </div> 
  )
}
import React from "react";
import Image from "next/image";
export default function Card ({title, content, desc, href, tecs}){
    return(
        <a href={href}>
            <div className='card-carousel'>
                <h2>{title}</h2>
                <Image className="img" src={content} alt=""/>
                <p>{desc}</p>
                <h4>Created with:</h4>
                <p className="tecs">{tecs}</p>
            </div>
        </a>
    )
};
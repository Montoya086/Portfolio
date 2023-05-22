import React from "react";

export default function Header({isOpen, setIsOpen}){
    return(
      <div className='header-wrapper'>
        <div className='header'>
          <div className='header-left'>
            <h4>Montoya's Portfolio</h4>
            <div className='underline'/>
          </div>
          <div className='header-right'>
            <div className='menu-button' onClick={()=>setIsOpen(!isOpen)}>
              <div className={`menu-button-bar element1 ${isOpen ? "open" : "close"}`}/>
              <div className={`menu-button-bar element2 ${isOpen ? "open" : "close"}`}/>
              <div className={`menu-button-bar element3 ${isOpen ? "open" : "close"}`}/>
            </div>
            <div className={`menu-wrapper ${isOpen ? "open" : "close"}`}>
              <div className='item-wrapper'>
                <div className={`menu-item home ${isOpen ? "open" : "close"}`}>
                  <h4>HOME</h4>
                  <div className='underline'/>
                </div>
                <div className={`menu-item about ${isOpen ? "open" : "close"}`}>
                  <h4>ABOUT</h4>
                  <div className='underline'/>
                </div>
                <div className={`menu-item port ${isOpen ? "open" : "close"}`}>
                  <h4>PORTFOLIO</h4>
                  <div className='underline'/>
                </div>
                <div className={`menu-item contact ${isOpen ? "open" : "close"}`}>
                  <h4>CONTACT</h4>
                  <div className='underline'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
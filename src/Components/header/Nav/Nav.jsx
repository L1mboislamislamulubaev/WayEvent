import React from 'react'
import cl from "./Nav.module.css"

const Nav = () => {
  return (
    <div>
    <div className={`${cl.container_left}`} >
    <h1 className={`${cl.title}`}>Все мероприятия <br/> на  одной платформе</h1>
   <div>
    <div className={`${cl.now}`}>Идет прямо сейчас</div>
    <div className={`${cl.live}`}>LIVE</div>
    </div>

    <button className={`${cl.join}`}>Присоединиться</button>
    </div>
    <div className={`${cl.container_right}`} >
    <div className={`${cl.background_title}`}></div>
    <div className={`${cl.background_time}`}></div>
    <div className={`${cl.background_reviews}`}></div>
    </div>
    </div>
  )
}

export default Nav

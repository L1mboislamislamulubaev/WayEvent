import React from 'react'
import cl from "./Nav.module.css"

const Nav = () => {
  return (
    <div className={`${cl.container}`}>
    <div className={`${cl.container_left}`} >
    <h1 className={`${cl.title}`}>Все мероприятия <br/> на  одной платформе</h1>
   <div>
    <div className={`${cl.now}`}>Идет прямо сейчас</div>
    <div className={`${cl.live}`}>LIVE</div>
    </div>

    <button className={`${cl.join}`}>Присоединиться</button>
    </div>
    <div className={`${cl.container_right}`} >
    <div className={`${cl.background_title}`}>
      <div className={`${cl.title_block_Up}`}>
          <div className={`${cl.titleUp}`}>28 февраля 13:00</div>
          <div className={`${cl.rating}`}>
              <p className={`${cl.rating_text}`}>Оценка полезности</p>
              <div className={`${cl.rating_img}`}> <img src="./rating.png" alt="" /></div>
              <div className={`${cl.navigation}`}>
                  <p className={`${cl.map}`}>как добраться?</p>
                <img src="./map.png" alt="" />
              </div>
              <div className={`${cl.textButt}`}>4.87</div>
            </div>
        </div>
      <div className={`${cl.titleDown}`}></div>
    </div>
    <div className={`${cl.background_time}`}>
    <div className={`${cl.title_block_Up}`}>
          <div className={`${cl.titleUp}`}>VkFest</div>
          <div className={`${cl.rating}`}>
              <p className={`${cl.rating_text}`}>Продолжительность</p>
             
              <div className={`${cl.navigation}`}>
                  <p className={`${cl.map, cl.time}`}>90 мин.</p>
               
              </div>
              
            </div>
        </div>
    </div>
    <div className={`${cl.background_reviews}`}>
    <div className={`${cl.title_block_Up}`}>
          <div className={`${cl.titleUp}`}>Количество отзывов</div>
          <div className={`${cl.rating}`}>
              
                  <p className={`${cl.rev_v}`}>113</p>
              
              
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Nav

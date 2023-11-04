import React from 'react'
import cl from './Content.module.css'
import JoinButton from '../UI/button/JoinButton'

const Content = () => {
  return (
    <div className={`${cl.content_container}`}>
    <div className={`${cl.content_event}`}>
    <div className={`${cl.content_data_time}`}>
    <div className={`${cl.content_date}`}>24.04</div>
    <div className={`${cl.content_time}`}>18.00</div>
    </div>
    <div className={`${cl.content_text}`} >
    <h1 className={`${cl.content_title}`} >Мероприятие</h1>
    <span className={`${cl.content_description}`}>Краткое описание в 2-3 строчки</span>
    </div>
    <JoinButton className={`${cl.content_join}`}>Присоединиться</JoinButton>
    </div>
    <div className={`${cl.content_event_second}`}>
    <div className={`${cl.content_data_time}`}>
    <div className={`${cl.content_date}`}>24.04</div>
    <div className={`${cl.content_time}`}>18.00</div>
    </div>
    <div className={`${cl.content_text}`} >
    <h1 className={`${cl.content_title}`} >Мероприятие</h1>
    <span className={`${cl.content_description}`}>Краткое описание в 2-3 строчки</span>
    </div>
    <JoinButton className={`${cl.content_join}`}>Присоединиться</JoinButton>
    </div>
    <div className={`${cl.content_event_third}`}>
    <div className={`${cl.content_data_time}`}>
    <div className={`${cl.content_date}`}>24.04</div>
    <div className={`${cl.content_time}`}>18.00</div>
    </div>
    <div className={`${cl.content_text}`} >
    <h1 className={`${cl.content_title}`} >Мероприятие</h1>
    <span className={`${cl.content_description}`}>Краткое описание в 2-3 строчки</span>
    
    </div>
    <JoinButton className={`${cl.content_join}`}>Присоединиться</JoinButton>
    </div>


    
    </div>  
  )
}

export default Content

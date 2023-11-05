
import React, { useState, useEffect } from 'react';
import cl from './Content.module.css'
import JoinButton from '../UI/button/JoinButton'

const Content = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://65463477fe036a2fa95556e0.mockapi.io/Meatings')
      .then((response) => response.json())
      .then((data) => setMeetings(data));
  }, []);

  const backgroundStyle = {
    background: 'url("/meatings/02.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Установите высоту по вашему усмотрению
  };

  return (
    <div className={`${cl.content_container}`}>
      {/* <img src='/meatings/01.jpg'/>   */}
       {meetings.map((meeting, index) => (
        <div style={{background: `url("${meeting.img}")`, backgroundSize: 'cover', backgroundPosition: 'center',}} className={`${cl.content_event}`}>
          <div className={`${cl.content_row}`}>
                <h1 className={`${cl.content_title}`} >{meeting.content_title}</h1>
                  <div className={`${cl.content_data_time}`}>
              <div className={`${cl.content_date}`}>{meeting.content_date}</div>
              <div className={`${cl.content_time}`}>{meeting.content_time}</div>
            </div>
          </div>
           
      <div  className={`${cl.content_text}`} >
       
        <span className={`${cl.content_description}`}>{meeting.content_description}</span>
      </div>
      <JoinButton className={`${cl.content_join}`}>Присоединиться</JoinButton>
      </div>
       ))}
    </div>  
  )
}

export default Content

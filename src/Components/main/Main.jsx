import React from 'react'
import cl from './Main.module.css'
const Event = () => {
  return (
    <div>
      <div className={`${cl.main_container}`} >

        <select className={`${cl.main_select}`} >
          <option value="value3">Актуальные</option>
          <option value="value3">По рейтингу</option>
          <option value="value3">Спортивные</option>
          <option value="value3">Общественные</option>
          <option value="value3">Культмассовые</option>
        </select>

        <input className={`${cl.main_search}`} type='search'></input>
        <label htmlFor="dateInput">Выберите дату:</label>
      <input
        className={`${cl.dateInput}`}
        type="date"
        id="dateInput"
   
      />
      
        
      
      </div>

      <br/>
      <br/>
      <br/>
      
    </div>
  )
}

export default Event

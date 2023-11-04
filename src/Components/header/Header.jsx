import React, { useState } from 'react';
import cl from './Header.module.css';
import useModal from '../../hooks/useModal';
import MyModal from '../../Components/UI/MyModal/MyModal';

const Header = ({ setModal }) => {

  

  return (
    <div className={`${cl.header}`}>
      <div className={`${cl.header_container}`}>
        <div className={`${cl.logo}`}>
        <img width='20px' src="logo.svg"/>

        </div>
        <div className={`${cl.header_description}`}>
          <div>EVENT</div>
          <div>EVENT</div>
          <div>EVENT</div>
          <div>EVENT</div>
        </div>
        <img className={`${cl.header_loop}`} src='./loop.svg' width="14px" alt="Loop Icon" />
        <input className={`${cl.header_search}`} type='search' placeholder='Найти мероприятие' />
        <div  onClick={()=>setModal(true)} className={`${cl.login}`}>Войти</div>
      </div>
   
      
      
      
    

  
    </div>
  );
};

export default Header;

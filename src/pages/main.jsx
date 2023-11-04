import React, { useState } from 'react';
import Header from '../Components/header/Header';
import Nav from '../Components/header/Nav/Nav';
import Content from '../Components/Content/Content';
import MyModal from '../Components/UI/MyModal/MyModal';
import Main from '../Components/main/Main';
import cl from './Mainy.module.css';
import JoinButton from '../Components/UI/button/JoinButton';
import RegModal from '../Components/UI/button/RegModal';
import OrganizateModal from '../Components/UI/MyModal/OrganizateModal';

const Mainy = ({ modal, setModal,setRegistrationModalVisible, registrationModalVisible,organize,setOrganize}) => {


  return (
    <div>
      <Header setModal={setModal} />
      <Nav />
      <Main />
      <Content />
      <MyModal visible={modal} setVisible={setModal}>
        <div className={cl.auto_reg}>
          <div className={cl.textIn}>Вход</div>
          <div onClick={() => { setRegistrationModalVisible(true); setModal(false) }}>
            <div className={`${cl.textReg}`}>Регистрация</div>
          </div>
        </div>
        <input placeholder='Введите Email' className={`${cl.inputEmail}`} type='email'></input>
        <div>
          <input placeholder='Введите пароль' className={`${cl.inputPass}`} type='password'></input>
        </div>
        <JoinButton className={`${cl.Button}`}>Войти</JoinButton>
        <div className={`${cl.Forgot}`}>Забыли пароль</div>
      </MyModal>
      <RegModal registrationModalVisible={registrationModalVisible} setRegistrationModalVisible={setRegistrationModalVisible}>
      <div className={cl.reg_auto}>

      <div onClick={() => { setRegistrationModalVisible(false); setModal(true) }} className={cl.textIn}>Вход</div>
          
            <div className={`${cl.textReg}`}>Регистрация</div></div>
            <div className={`${cl.choice}`}>
            <div 

            className={`${cl.participant}`}>
            Я участник
            </div>
            <div onClick = {() => {setRegistrationModalVisible(false); setOrganize(true)}} className={`${cl.organizer}`}>Я организатор</div>
            
            </div>
            <div>
      <input placeholder='Введите никнейм' type='text' className={`${cl.inputNick}`}  ></input>
      <input placeholder='Введите Email' type='email'  className={`${cl.inputEmailReg}`} ></input>
      <input placeholder='Введите пароль(от 8 символов)' type='password' className={`${cl.inputPassreg}`} ></input>
      <input placeholder='Повторите пароль' type='password' className={`${cl.inputPassRep}`}></input>
      <JoinButton className={`${cl.ButtonReg}`}>Зарегистрироваться</JoinButton>
      
    </div>
      
      </RegModal>
      <OrganizateModal organize={organize} setOrganize={setOrganize}>

      
      <div>
      <div className={cl.reg_auto}>

      <div onClick={() => { setRegistrationModalVisible(false); setModal(true); setOrganize(false) }} className={cl.textIn}>Вход</div>
          
            <div className={`${cl.textReg}`}>Регистрация</div></div>
            <div className={`${cl.choice}`}>
            <div 
            onClick={() => { setRegistrationModalVisible(true); setModal(false); setOrganize(false) }}

            className={`${cl.participant}`}>
            Я участник
            </div>
            <div onClick = {() => {setRegistrationModalVisible(false); setOrganize(true)}} className={`${cl.organizer}`}>Я организатор</div>
            
            </div>
      <input placeholder='Введите никнейм' type='text' className={`${cl.inputNick}`}  ></input>
      <input placeholder='Введите Email' type='email'  className={`${cl.inputEmailReg}`} ></input>
      <input placeholder='Введите пароль(от 8 символов)' type='password' className={`${cl.inputPassreg}`} ></input>
      <input placeholder='Повторите пароль' type='password' className={`${cl.inputPassRep}`}></input>
      <div className={cl.uploadBtnWrapper}>
      <div></div>
      <button className={cl.btn}>Фото паспорта</button>
      <button className={cl.btn_pass}>Фото с паспортом в руках</button>
  
      <input type="file" name="myfile" id="myfile" className={cl.fileInput} accept="image/*" />
    </div>
      
      <JoinButton className={`${cl.ButtonReg}`}>Зарегистрироваться</JoinButton></div>
     
     
      </OrganizateModal>
      
    </div>
      
      
    
  );
};

export default Mainy;

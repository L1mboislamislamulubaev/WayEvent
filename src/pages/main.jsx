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

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  async function registerUser(nickname, email, password) {
    try {
      const response = await fetch('https://65463477fe036a2fa95556e0.mockapi.io/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: nickname,
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        // Успешно зарегистрировано
        return true;
      } else {
        // Ошибка при регистрации
        return false;
      }
    } catch (error) {
      // Обработка ошибок
      console.error('Ошибка при регистрации:', error);
      return false;
    }
  }
  const handleRegistration = async () => {
    if (password !== passwordRepeat) {
      // Пароли не совпадают, обработайте это как неудачную регистрацию
      return;
    }
  
    const success = await registerUser(nickname, email, password);
    if (success) {
      // Успешная регистрация, выполните действия, которые вам нужны
      // Например, скройте модальное окно регистрации
      setRegistrationModalVisible(false);
    } else {
      // Регистрация не удалась, можно показать сообщение об ошибке
    }
  };
  

  const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');



async function checkPassword(email, password) {
  // Проверка валидности email и пароля
  if (!isValidEmail(email)) {
    console.error('Введен неверный email.');
    return false;
  }

  if (!isValidPassword(password)) {
    console.error('Введен неверный пароль.');
    return false;
  }

  try {
    const response = await fetch('https://65463477fe036a2fa95556e0.mockapi.io/user', {
      method: 'GET', // Используем метод GET для получения данных
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const users = await response.json();
      // Поиск пользователя с указанным email и паролем в полученных данных
      const user = users.find((user) => user.email === email && user.password === password);
      console.log('console.log(users)' , users)
      if (user) {
        // Пароль и email верны
        return true;
      } else {
        // Пароль или email неверны
        console.error('Неверный email или пароль.');
        console.log('console.log(users)' , users)
        return false;
      }
    } else {
      console.error('Ошибка при получении данных с сервера.');
      return false;
    }
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка при проверке пароля:', error);
    return false;
  }
}

// Функция для проверки валидности email
function isValidEmail(email) {
  // Здесь вы можете добавить более сложную логику проверки email, если необходимо
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Функция для проверки валидности пароля (например, минимальная длина)
function isValidPassword(password) {
  // Здесь вы можете добавить более сложную логику проверки пароля, если необходимо
  return password.length >= 8;
}

  




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
        <input placeholder='Введите Email' className={`${cl.inputEmail}`} type='email' value={loginEmail}
  onChange={(e) => setLoginEmail(e.target.value)} ></input>
        <div>
          <input placeholder='Введите пароль' className={`${cl.inputPass}`} type='password' value={loginPassword}
  onChange={(e) => setLoginPassword(e.target.value)}></input>
        </div>
        <JoinButton 
            className={`${cl.Button}`}
            onClick={async () => {
              const success = await checkPassword(loginEmail, loginPassword);
              if (success) {
                // Пароль верный, выполните действия, которые вам нужны
                console.log('Пароль верный')
                // Например, разрешите вход и скройте модальное окно входа
                setModal(false);
              } else {
                // Пароль неверный, можно показать сообщение об ошибке
                console.log('Пароль неверный')
              }
            }}
            >
          Войти
          </JoinButton>
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
      <input 
        placeholder='Введите никнейм' 
        type='text' 
        className={`${cl.inputNick}`}  
        value={nickname}
         onChange={(e) => setNickname(e.target.value)}>
          

      </input>
      <input placeholder='Введите Email' type='email'  className={`${cl.inputEmailReg}`}  value={email}
  onChange={(e) => setEmail(e.target.value)}>
        
      </input>
      <input placeholder='Введите пароль(от 8 символов)' type='password' className={`${cl.inputPassreg}`}    value={password}
  onChange={(e) => setPassword(e.target.value)}></input>
      <input placeholder='Повторите пароль' type='password' className={`${cl.inputPassRep}`}  value={passwordRepeat}
  onChange={(e) => setPasswordRepeat(e.target.value)}></input>
      <JoinButton
      
       className={`${cl.ButtonReg}`}
       
       onClick={() => {
        if (password === passwordRepeat) {
          // Пароли совпадают, выполняем регистрацию
          registerUser(nickname, email, password)
            .then((success) => {
              if (success) {
                // Успешная регистрация, выполните действия, которые вам нужны
                // Например, скройте модальное окно регистрации
                setRegistrationModalVisible(false);
              } else {
                // Регистрация не удалась, можно показать сообщение об ошибке
              }
            })
            .catch((error) => {
              // Обработка ошибок при регистрации
              console.error('Ошибка при регистрации:', error);
            });
        } else {
          // Пароли не совпадают, обработайте это как неудачную регистрацию
        }
      }}
    >

       
        

        Зарегистрироваться</JoinButton>
      
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

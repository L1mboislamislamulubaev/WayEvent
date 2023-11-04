import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Nav from './Components/header/Nav/Nav';
import Main from './Components/main/Main';
import Content from './Components/Content/Content';
import MyModal from './Components/UI/MyModal/MyModal';
import { useState } from 'react';
import main from './pages/main';
import Mainy from './pages/main';

function App() {
  const [registrationModalVisible, setRegistrationModalVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [organize,setOrganize] = useState(false);
  return (
    <div className="App">
    <Mainy setModal={setModal} modal={modal} registrationModalVisible = {registrationModalVisible} setRegistrationModalVisible ={setRegistrationModalVisible} organize={organize} setOrganize={setOrganize}/>
  
    
    
    
   
      
    </div>
  );
}

export default App;

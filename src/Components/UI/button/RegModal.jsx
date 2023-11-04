import React from 'react'
import cl from './RegModal.module.css'
const RegModal = ({children,registrationModalVisible,setRegistrationModalVisible}) => {


  const rootClasses = [cl.myModal]


  if (registrationModalVisible){
    rootClasses.push(cl.active);
  }


  return (
    <div className={rootClasses.join(' ')} onClick={()=> setRegistrationModalVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      
    </div>
  );
};

export default RegModal

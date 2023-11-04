import React from 'react'
import cl from './OrganizateModal.module.css'
const OrganizateModal = ({children,organize,setOrganize}) => {


  const rootClasses = [cl.myModal]


  if (organize){
    rootClasses.push(cl.active);
  }


  return (
    <div className={rootClasses.join(' ')} onClick={()=> setOrganize(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      
    </div>
  );
};

export default OrganizateModal

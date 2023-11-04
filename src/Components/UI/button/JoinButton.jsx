import React from 'react'
import cl from './JoinButton.module.css'

const JoinButton = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${cl.join_button} ${className}`}>
      {children}
    </button>
  )
}

export default JoinButton

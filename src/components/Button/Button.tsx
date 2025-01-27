import React from 'react'
import './button.css'
interface ButtonProps {
    readonly icon?: string
    readonly onClick: () => void
    readonly className: string
    readonly buttonName?: string
    readonly username?: string
}

const Button = (props: ButtonProps) => {
    
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.icon ? <img src={props.icon} alt='icon' style={{ cursor: 'pointer' }} /> : ''}
      {props.buttonName ? <h4>{props.buttonName}</h4> : ''}
    </button>
  )
}

export default Button
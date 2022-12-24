import React from 'react'
import './button.css'
interface ButtonProps {
    readonly icon: string
    readonly onClick: () => void
    readonly className: string
    readonly buttonName?: string
}

const Button = (props: ButtonProps) => {
    
  return (
    <button className={props.className} onClick={props.onClick}>
        <img src={props.icon} alt='icon' />
        {props.buttonName ? <h4>{props.buttonName}</h4> : ''}
    </button>
  )
}

export default Button
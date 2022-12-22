import React from 'react'

interface ButtonProps {
    readonly scoreIcon: string
    readonly onClick: () => void
}

const Button = (props: ButtonProps) => {
    
  return (
    <button style={{background: 'none', cursor: 'pointer', lineHeight: 0}} onClick={props.onClick}>
        <img src={props.scoreIcon} alt='scoreIcon' />
    </button>
  )
}

export default Button
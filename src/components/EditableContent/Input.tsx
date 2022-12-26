import React from 'react'
import './input.css'

interface InputProps {
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  readonly value: string
}

const EditableContent = (props: InputProps) => {
  return (
    <input type='text' value={props.value} onChange={props.onChange} className='content-input' />
  )
}

export default EditableContent
import React from 'react'
import './reply.css'

const Reply = () => {
  return (
    <button className='reply-button' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <img src={'./icon-reply.svg'} alt='icon-reply' />
        <h4 >Reply</h4>
    </button>
  )
}

export default Reply
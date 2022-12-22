import React from 'react'
import './vote.css'

interface VoteProps {
  readonly score: number
}

const Vote = (props: VoteProps) => {
  return (
    <div className='vote'>
      <button style={{background: 'none'}}>
        <img src={`./icon-plus.svg`} alt='plus' />
      </button>
      <h4>{props.score}</h4>
      <button style={{background: 'none'}}>
        <img src={`./icon-minus.svg`} alt='minus' />
      </button>
    </div>
  )
}

export default Vote
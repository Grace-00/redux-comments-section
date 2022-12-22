import React from 'react'
import './rating.css'

interface VoteProps {
  readonly children: React.ReactNode
  readonly className: string
}

const Rating = (props: VoteProps) => {
  return (
    <div className={props.className}>{props.children}</div>
  )
}

export default Rating